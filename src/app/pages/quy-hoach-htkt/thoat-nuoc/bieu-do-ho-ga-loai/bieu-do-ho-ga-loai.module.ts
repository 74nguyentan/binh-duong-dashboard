import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BieuDoHoGaLoaiComponent } from './bieu-do-ho-ga-loai.component';
import { PieChartModule } from '@swimlane/ngx-charts';
import { ChartZeroValueModule } from '@shared/directives/chart-zero-value/chart-zero-value.module';

@NgModule({
  declarations: [BieuDoHoGaLoaiComponent],
  imports: [CommonModule, PieChartModule,ChartZeroValueModule],
  exports: [BieuDoHoGaLoaiComponent],
})
export class BieuDoHoGaLoaiModule {}
