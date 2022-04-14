import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BieuDoHoGaDvhcComponent } from './bieu-do-ho-ga-dvhc.component';
import { BarChartModule } from '@swimlane/ngx-charts';



@NgModule({
  declarations: [BieuDoHoGaDvhcComponent],
  imports: [
    CommonModule,BarChartModule
  ],
  exports:[BieuDoHoGaDvhcComponent]
})
export class BieuDoHoGaDvhcModule { }
