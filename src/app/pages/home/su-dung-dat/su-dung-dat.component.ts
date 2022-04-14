import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { QueryFilter } from 'nest-crud-typeorm-client';
import { takeUntil, finalize } from 'rxjs/operators';
import { ResponseGetThongKe } from '../../../shared/services/thong-ke/su-dung-dat.interface';
import { SuDungDatService } from '../../../shared/services/thong-ke/su-dung-dat.service';
import { DashboardService } from '../../../shared/services/dashboard.service';

@Component({
  selector: 'dashboard-su-dung-dat',
  templateUrl: './su-dung-dat.component.html',
  styleUrls: ['./su-dung-dat.component.css']
})
export class SuDungDatComponent implements OnInit, OnDestroy {
  @Input() height = 500;
  view = [null, this.height];
  isLoading = false;
  value: ResponseGetThongKe;
  xAxisLabel = 'Tổng diện tích';

  private destroy$ = new Subject();
  constructor(
    private service: SuDungDatService,
    private dashboardService: DashboardService
  ) { }

  ngOnInit() {
    this.dashboardService.lstQuanHuyenSelected$
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(s => {
        this.loadData(s.map(m=>m.maQuanHuyen));
      });
  }


  yAxisTickFormatting = (val) => {
    if (this.value.datas.length) {
      const data = this.value.datas.find((f) => f.name === val);
      if (data) {
        return data.title;
      }
    }
    return '';
  }

  private loadData(lstQuanHuyen: string[]) {
    this.isLoading = true;
    const filter: QueryFilter[] = [
      { field: 'loaiQuyHoach', operator: '$eq', value: 'QHPK_SuDungDat' }
    ];
    lstQuanHuyen.length && filter.push({ field: 'maQuanHuyen', operator: '$in', value: lstQuanHuyen });
    this.service.getThongKe({
      filter
    })
      .pipe(finalize(() => this.isLoading = false), takeUntil(this.destroy$))
      .subscribe(value => {
        this.value = value;
        this.xAxisLabel = `Tổng diện tích (${value.unit})`;
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
