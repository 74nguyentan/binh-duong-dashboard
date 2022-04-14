import {
  Component,
  OnInit,
  Input,
  HostBinding,
  OnDestroy,
  ɵisDefaultChangeDetectionStrategy,
} from '@angular/core';
import { finalize, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { QueryFilter } from 'nest-crud-typeorm-client';
import { DatasetModel } from '../../../shared/models/dataset.model';
import { ChartSingle } from '../../../shared/models/thong-ke/chart-response.model';
import { ResponseGetThongKe } from '../../../shared/services/thong-ke/ha-tang-ky-thuat.interface';
import { DatasetService } from '../../../shared/services/dataset.service';
import { HaTangKyThuatService } from '../../../shared/services/thong-ke/ha-tang-ky-thuat.service';
import { DashboardService } from '../../../shared/services/dashboard.service';

@Component({
  selector: 'dashboard-ha-tang-ky-thuat',
  templateUrl: './ha-tang-ky-thuat.component.html',
  styleUrls: ['./ha-tang-ky-thuat.component.css'],
})
export class HaTangKyThuatComponent implements OnInit, OnDestroy {
  @Input() height = 500;
  view = [null, this.height];
  datasets: DatasetModel[] = [];
  yAxisLabel: string = 'Số lượng';
  isLoading = false;
  private _datasetSelected: DatasetModel;
  get datasetSelected() {
    return this._datasetSelected;
  }
  set datasetSelected(val: DatasetModel) {
    this._datasetSelected = val;
    this.loadData();
  }
  private _lstQuanHuyen: string[];
  get lstQuanHuyen() {
    return this._lstQuanHuyen;
  }
  set lstQuanHuyen(val: string[]) {
    this._lstQuanHuyen = val;
    this.loadData();
  }

  chartValues: Array<ChartSingle & { donVi: string }> = [];
  values: Array<ResponseGetThongKe> = [];
  private destroy$ = new Subject();
  constructor(
    private datasetService: DatasetService,
    private tkHTKTService: HaTangKyThuatService,
    private dashboardService: DashboardService
  ) {}

  private loadData(
    datasetId: string = this.datasetSelected && this.datasetSelected.datasetId,
    lstQuanHuyen = this.lstQuanHuyen
  ) {
    if (!(datasetId && lstQuanHuyen)) {
      return;
    }
    this.isLoading = true;

    const filter: QueryFilter[] = [
      { field: 'linhVuc', operator: '$eq', value: datasetId },
    ];
    lstQuanHuyen.length &&
      filter.push({ field: 'quanHuyen', operator: '$in', value: lstQuanHuyen });
    this.tkHTKTService
      .getThongKe({
        filter,
      })
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((value) => {
        this.values = value;
        this.chartValues = value.map((val) => {
          return {
            name: val.lopDuLieu,
            title: val.layerName,
            value: val.soLuong,
            donVi: val.donVi,
          };
        });
      });
  }

  ngOnInit() {
    this.isLoading = true;
    this.datasetService
      .getMany({
        fields: ['datasetId', 'datasetName'],
        filter: [
          { field: 'datasetId', operator: '$starts', value: 'HienTrang' },
        ],
      })
      .pipe(
        finalize(() => (this.isLoading = false)),
        takeUntil(this.destroy$)
      )
      .subscribe((values) => {
        this.datasets = values;
        // chọn Số lượng đầu tiên làm mặc định
        if (values.length) {
          this.datasetSelected = values[0];
        }
      });

    this.dashboardService.lstQuanHuyenSelected$
      .pipe(takeUntil(this.destroy$))
      .subscribe((s) => (this.lstQuanHuyen = s.map((m) => m.maQuanHuyen)));
  }

  xAxisTickFormatting = (label) => {
    if (label && this.chartValues) {
      const data = this.chartValues.find((f) => f.name === label);
      if (data) {
        return data.title;
      }
    }
    return '';
  };

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
