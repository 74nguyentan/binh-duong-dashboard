import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BieuDoCDCAPONGComponent } from './bieu-do-cdco.component';
import { PieChartModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [BieuDoCDCAPONGComponent],
  imports: [CommonModule, PieChartModule],
  exports: [BieuDoCDCAPONGComponent],
})
export class BieuDoCDCOModule {}
