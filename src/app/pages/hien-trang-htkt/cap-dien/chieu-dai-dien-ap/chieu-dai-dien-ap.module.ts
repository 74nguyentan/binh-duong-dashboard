import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChieuDaiDienApComponent } from './chieu-dai-dien-ap.component';
import { BarChartModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [ChieuDaiDienApComponent],
  imports: [CommonModule, BarChartModule],
  exports: [ChieuDaiDienApComponent],
})
export class ChieuDaiDienApModule {}
