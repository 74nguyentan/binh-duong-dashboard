import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BieuDoTBDvhcComponent } from './bieu-do-tb-dvhc.component';
import { BarChartModule } from '@swimlane/ngx-charts';



@NgModule({
  declarations: [BieuDoTBDvhcComponent],
  imports: [
    CommonModule,BarChartModule
  ],
  exports:[BieuDoTBDvhcComponent]
})
export class BieuDoTBDvhcModule { }
