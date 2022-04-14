import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BieuDoLoaiBdsDvhcComponent } from './bieu-do-loai-bds-dvhc.component';
import { BarChartModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [BieuDoLoaiBdsDvhcComponent],
  imports: [CommonModule, BarChartModule],
  exports: [BieuDoLoaiBdsDvhcComponent],
})
export class BieuDoLoaiBdsDvhcModule {}
