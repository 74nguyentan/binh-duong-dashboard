import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BieuDoTramvtDvqlComponent } from './bieu-do-tramvt-dvql.component';
import { BarChartModule } from '@swimlane/ngx-charts';



@NgModule({
  declarations: [BieuDoTramvtDvqlComponent],
  imports: [
    CommonModule,BarChartModule
  ],
  exports:[BieuDoTramvtDvqlComponent]
})
export class BieuDoTramvtDvqlModule { }
