import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoLuongDvhcComponent } from './so-luong-dvhc.component';
import { BarChartModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [SoLuongDvhcComponent],
  imports: [CommonModule, BarChartModule],
  exports: [SoLuongDvhcComponent],
})
export class SoLuongDvhcModule {}
