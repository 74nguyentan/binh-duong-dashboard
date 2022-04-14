import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BieuDoChieuDaiCoOngComponent } from './bieu-do-chieu-dai-co-ong.component';
import { PieChartModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [BieuDoChieuDaiCoOngComponent],
  imports: [CommonModule, PieChartModule],
  exports: [BieuDoChieuDaiCoOngComponent],
})
export class BieuDoChieuDaiCoOngModule {}
