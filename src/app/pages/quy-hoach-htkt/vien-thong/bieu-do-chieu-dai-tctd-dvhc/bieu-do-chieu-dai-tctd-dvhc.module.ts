import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BieuDoChieuDaiTctdDvhcComponent } from './bieu-do-chieu-dai-tctd-dvhc.component';
import { BarChartModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [BieuDoChieuDaiTctdDvhcComponent],
  imports: [CommonModule, BarChartModule],
  exports: [BieuDoChieuDaiTctdDvhcComponent],
})
export class BieuDoChieuDaiTctdDvhcModule {}
