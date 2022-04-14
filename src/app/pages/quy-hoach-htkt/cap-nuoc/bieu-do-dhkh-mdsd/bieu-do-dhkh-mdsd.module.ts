import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BieuDoDHKHTheoMucDichSuDungComponent } from './bieu-do-dhkh-mdsd.component';
import { PieChartModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [BieuDoDHKHTheoMucDichSuDungComponent],
  imports: [CommonModule, PieChartModule],
  exports: [BieuDoDHKHTheoMucDichSuDungComponent],
})
export class BieuDoDHKHTheoMucDichSuDungModule {}
