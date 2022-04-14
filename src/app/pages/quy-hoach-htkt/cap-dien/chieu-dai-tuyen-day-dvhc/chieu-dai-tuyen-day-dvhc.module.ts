import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChieuDaiTuyenDayDvhcComponent } from './chieu-dai-tuyen-day-dvhc.component';
import { BarChartModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [ChieuDaiTuyenDayDvhcComponent],
  imports: [CommonModule, BarChartModule],
  exports: [ChieuDaiTuyenDayDvhcComponent],
})
export class ChieuDaiTuyenDayDvhcModule {}
