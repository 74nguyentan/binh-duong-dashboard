import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaiDuAnComponent } from './loai-du-an.component';
import { PieChartModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [LoaiDuAnComponent],
  imports: [CommonModule, PieChartModule],
  exports: [LoaiDuAnComponent],
})
export class LoaiDuAnModule {}
