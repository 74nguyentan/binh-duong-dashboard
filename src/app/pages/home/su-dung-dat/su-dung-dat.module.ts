import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuDungDatComponent } from './su-dung-dat.component';
import { BarChartModule } from '@swimlane/ngx-charts';
import { NbSpinnerModule } from '@nebular/theme';



@NgModule({
  declarations: [SuDungDatComponent],
  imports: [
    CommonModule,
    NbSpinnerModule,
    BarChartModule
  ],
  exports: [SuDungDatComponent]
})
export class SuDungDatModule { }
