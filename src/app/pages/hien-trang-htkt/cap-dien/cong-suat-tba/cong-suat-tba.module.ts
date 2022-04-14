import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CongSuatTbaComponent } from './cong-suat-tba.component';
import { BarChartModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [CongSuatTbaComponent],
  imports: [CommonModule, BarChartModule],
  exports: [CongSuatTbaComponent],
})
export class CongSuatTbaModule {}
