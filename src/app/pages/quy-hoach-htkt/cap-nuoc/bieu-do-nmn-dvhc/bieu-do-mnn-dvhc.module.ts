import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BieuDoNMNDvhcComponent } from './bieu-do-nmn-dvhc.component';
import { BarChartModule } from '@swimlane/ngx-charts';
import { ChartZeroValueModule } from '@shared/directives/chart-zero-value/chart-zero-value.module';



@NgModule({
  declarations: [BieuDoNMNDvhcComponent],
  imports: [
    CommonModule,BarChartModule,
    ChartZeroValueModule
  ],
  exports:[BieuDoNMNDvhcComponent]
})
export class BieuDoNMNDvhcModule { }
