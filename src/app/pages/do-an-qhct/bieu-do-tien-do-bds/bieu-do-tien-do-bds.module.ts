import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BieuDoTienDoBdsComponent } from './bieu-do-tien-do-bds.component';
import { BarChartModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [BieuDoTienDoBdsComponent],
  imports: [CommonModule, BarChartModule],
  exports: [BieuDoTienDoBdsComponent],
})
export class BieuDoTienDoBdsModule {}
