import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaiCtDvhcComponent } from './loai-ct-dvhc.component';
import { BarChartModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [LoaiCtDvhcComponent],
  imports: [CommonModule, BarChartModule],
  exports: [LoaiCtDvhcComponent],
})
export class LoaiCtDvhcModule {}
