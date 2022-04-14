import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BieuDoDHKHDvhcComponent } from './bieu-do-dhkh-dvhc.component';
import { BarChartModule } from '@swimlane/ngx-charts';



@NgModule({
  declarations: [BieuDoDHKHDvhcComponent],
  imports: [
    CommonModule,BarChartModule
  ],
  exports:[BieuDoDHKHDvhcComponent]
})
export class BieuDoDHKHDvhcModule { }
