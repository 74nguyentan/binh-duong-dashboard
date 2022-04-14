import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BieuDoDCODvhcComponent } from './bieu-do-dco-dvhc.component';
import { BarChartModule } from '@swimlane/ngx-charts';



@NgModule({
  declarations: [BieuDoDCODvhcComponent],
  imports: [
    CommonModule,BarChartModule
  ],
  exports:[BieuDoDCODvhcComponent]
})
export class BieuDoDCODvhcModule { }
