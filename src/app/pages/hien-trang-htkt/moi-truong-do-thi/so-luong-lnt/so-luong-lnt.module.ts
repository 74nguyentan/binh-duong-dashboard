import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoLuongLntComponent } from './so-luong-lnt.component';
import { BarChartModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [SoLuongLntComponent],
  imports: [CommonModule, BarChartModule],
  exports: [SoLuongLntComponent],
})
export class SoLuongLntModule {}
