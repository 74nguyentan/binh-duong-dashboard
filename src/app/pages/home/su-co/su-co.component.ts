import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { finalize, takeUntil } from 'rxjs/operators';
import { QueryFilter } from 'nest-crud-typeorm-client';
import { Subject } from 'rxjs';
import { ResponseGetThongKe } from '../../../shared/services/thong-ke/su-co.interface';
import { SuCoService } from '../../../shared/services/thong-ke/su-co.service';
import { DashboardService } from '../../../shared/services/dashboard.service';
@Component({
  selector: 'dashboard-su-co',
  templateUrl: './su-co.component.html',
  styleUrls: ['./su-co.component.css'],
})
export class SuCoComponent implements OnInit, OnDestroy {
  @Input() height = 500;
  view = [null, this.height];
  xAxisLabel: string = 'Số lượng';
  isLoading = false;
  colorScheme = {
    domain: ['#27ae60', '#f1c40f', '#c0392b'],
  };
  value: ResponseGetThongKe;

  private destroy$ = new Subject();
  constructor(
    private thongKeService: SuCoService,
    private dashboardService: DashboardService
  ) {}

  ngOnInit() {
    this.dashboardService.lstQuanHuyenSelected$
      .pipe(takeUntil(this.destroy$))
      .subscribe((s) => {
        this.loadData(s.map((m) => m.maQuanHuyen));
      });
  }

  xAxisTickFormatting = (val) => {
    if (val && this.value.datas.length) {
      const data = this.value.datas.find((f) => f.name === val);
      if (data) {
        return data.title;
      }
    }
    return '';
  };

  private loadData(lstQuanHuyen: string[]) {
    this.isLoading = true;
    const filter: QueryFilter[] = [];
    lstQuanHuyen.length &&
      filter.push({
        field: 'maQuanHuyen',
        operator: '$in',
        value: lstQuanHuyen,
      });
    this.thongKeService
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
