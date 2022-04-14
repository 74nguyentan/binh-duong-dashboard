import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NhaoBdsComponent } from './nhao-bds.component';
import { BarChartModule } from '@swimlane/ngx-charts';
import { SharedNebularModule } from '../../../shared/nebular.module';



@NgModule({
  declarations: [NhaoBdsComponent],
  imports: [
    CommonModule,
    SharedNebularModule,
    BarChartModule
  ],
  exports:[NhaoBdsComponent]
})
export class NhaoBdsModule { }
