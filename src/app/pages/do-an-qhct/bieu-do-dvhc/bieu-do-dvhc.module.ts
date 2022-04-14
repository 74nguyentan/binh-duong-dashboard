import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BieuDoDvhcComponent } from './bieu-do-dvhc.component';
import { BarChartModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [BieuDoDvhcComponent],
  imports: [CommonModule, BarChartModule],
  exports: [BieuDoDvhcComponent],
})
export class BieuDoDvhcModule {}
