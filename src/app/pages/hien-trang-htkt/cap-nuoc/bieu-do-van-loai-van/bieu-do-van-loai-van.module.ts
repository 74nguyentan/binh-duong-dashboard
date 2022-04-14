import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BieuDoVanLoaiVanComponent } from './bieu-do-van-loai-van.component';
import { PieChartModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [BieuDoVanLoaiVanComponent],
  imports: [CommonModule, PieChartModule],
  exports: [BieuDoVanLoaiVanComponent],
})
export class BieuDoVanLoaiVanModule {}
