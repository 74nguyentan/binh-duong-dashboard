import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BieuDoMucDichSddComponent } from './bieu-do-muc-dich-sdd.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NbSpinnerModule } from '@nebular/theme';

@NgModule({
  declarations: [BieuDoMucDichSddComponent],
  imports: [CommonModule, NgxChartsModule, NbSpinnerModule],
  exports: [BieuDoMucDichSddComponent],
})
export class BieuDoMucDichSddModule { }
