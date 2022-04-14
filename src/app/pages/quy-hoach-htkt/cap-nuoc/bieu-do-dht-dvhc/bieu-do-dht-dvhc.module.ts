import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BieuDoDHTDvhcComponent } from './bieu-do-dht-dvhc.component';
import { BarChartModule } from '@swimlane/ngx-charts';



@NgModule({
  declarations: [BieuDoDHTDvhcComponent],
  imports: [
    CommonModule,BarChartModule
  ],
  exports:[BieuDoDHTDvhcComponent]
})
export class BieuDoDHTDvhcModule { }
