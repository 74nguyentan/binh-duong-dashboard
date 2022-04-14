import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaiDuAnBdsComponent } from './loai-du-an-bds.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [LoaiDuAnBdsComponent],
  imports: [CommonModule, NgxChartsModule],
  exports: [LoaiDuAnBdsComponent],
})
export class LoaiDuAnBdsModule { }
