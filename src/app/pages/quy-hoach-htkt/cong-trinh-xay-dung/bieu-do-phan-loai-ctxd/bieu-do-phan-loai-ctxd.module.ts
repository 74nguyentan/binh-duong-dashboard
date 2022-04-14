import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BieuDoPhanLoaiCtxdComponent } from './bieu-do-phan-loai-ctxd.component';
import { PieChartModule } from '@swimlane/ngx-charts';
import { ChartZeroValueModule } from '@shared/directives/chart-zero-value/chart-zero-value.module';

@NgModule({
  declarations: [BieuDoPhanLoaiCtxdComponent],
  imports: [CommonModule, PieChartModule,ChartZeroValueModule],
  exports: [BieuDoPhanLoaiCtxdComponent],
})
export class BieuDoPhanLoaiCtxdModule {}
