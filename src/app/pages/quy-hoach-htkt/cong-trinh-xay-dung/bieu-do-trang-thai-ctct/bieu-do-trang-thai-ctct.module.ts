import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BieuDoTrangThaiCtctComponent } from './bieu-do-trang-thai-ctct.component';
import { PieChartModule } from '@swimlane/ngx-charts';
import { ChartZeroValueModule } from '../../../../shared/directives/chart-zero-value/chart-zero-value.module';

@NgModule({
  declarations: [BieuDoTrangThaiCtctComponent],
  imports: [CommonModule, PieChartModule, ChartZeroValueModule],
  exports: [BieuDoTrangThaiCtctComponent],
})
export class BieuDoTrangThaiCtctModule {}
