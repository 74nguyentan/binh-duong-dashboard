import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BieuDoDienTichDvhcComponent } from './bieu-do-dien-tich-dvhc.component';
import { BarChartModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [BieuDoDienTichDvhcComponent],
  imports: [CommonModule, BarChartModule],
  exports: [BieuDoDienTichDvhcComponent],
})
export class BieuDoDienTichDvhcModule {}
