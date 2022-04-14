import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BieuDoHoGaDuongKinhComponent } from './bieu-do-ho-ga-duong-kinh.component';
import { PieChartModule } from '@swimlane/ngx-charts';
import { ChartZeroValueModule } from '@shared/directives/chart-zero-value/chart-zero-value.module';

@NgModule({
  declarations: [BieuDoHoGaDuongKinhComponent],
  imports: [CommonModule, PieChartModule,ChartZeroValueModule],
  exports: [BieuDoHoGaDuongKinhComponent],
})
export class BieuDoHoGaDuongKinhModule {}
