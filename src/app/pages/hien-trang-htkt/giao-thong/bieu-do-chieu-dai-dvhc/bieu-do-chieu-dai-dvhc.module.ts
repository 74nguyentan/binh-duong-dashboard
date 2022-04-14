import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BieuDoChieuDaiDvhcComponent } from './bieu-do-chieu-dai-dvhc.component';
import { BarChartModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [BieuDoChieuDaiDvhcComponent],
  imports: [CommonModule, BarChartModule],
  exports: [BieuDoChieuDaiDvhcComponent],
})
export class BieuDoChieuDaiDvhcModule {}
