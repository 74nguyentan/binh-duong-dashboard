import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { finalize, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { QueryFilter } from 'nest-crud-typeorm-client';
import { NhaOBatDongSanService } from '../../../shared/services/thong-ke/nha-o-bat-dong-san.service';
import { DashboardService } from '../../../shared/services/dashboard.service';
import { ResponseGetThongKe } from '../../../shared/services/thong-ke/nha-o-bat-dong-san.interface';

@Component({
  selector: 'dashboard-nhao-bds',
  templateUrl: './nhao-bds.component.html',
  styleUrls: ['./nhao-bds.component.css'],
})
export class NhaoBdsComponent implements OnInit, OnDestroy {
  @Input() height = 500;
  view = [null, this.height];
  isLoading = false;
  value: ResponseGetThongKe;
  private destroy$ = new Subject();
  constructor(
    private service: NhaOBatDongSanService,
    private dashboardService: DashboardService
  ) {}

  ngOnInit() {
    this.isLoading = true;

    this.dashboardService.lstQuanHuyenSelected$
      .pipe(takeUntil(this.destroy$))
      .subscribe((s) => {
        this.loadData(s.map((m) => m.maQuanHuyen));
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
  };

  private loadData(lstQuanHuyen: string[]) {
    const filter: QueryFilter[] = [];
    lstQuanHuyen.length &&
      filter.push({
        field: 'maQuanHuyen',
        operator: '$in',
        value: lstQuanHuyen,
      });
    this.service
      .getThongKe({ filter })
      .pipe(
        finalize(() => (this.isLoading = false)),
        takeUntil(this.destroy$)
      )
      .subscribe((value) => {
        this.value = value;
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
