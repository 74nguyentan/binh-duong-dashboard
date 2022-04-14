import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BieuDoTramvtDvhcComponent } from './bieu-do-tramvt-dvhc.component';
import { BarChartModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [BieuDoTramvtDvhcComponent],
  imports: [CommonModule, BarChartModule],
  exports: [BieuDoTramvtDvhcComponent],
})
export class BieuDoTramvtDvhcModule {}
