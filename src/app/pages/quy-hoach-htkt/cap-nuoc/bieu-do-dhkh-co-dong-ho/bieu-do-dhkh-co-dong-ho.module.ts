import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BieuDoDHKHTheoCoDongHoComponent } from './bieu-do-dhkh-co-dong-ho.component';
import { PieChartModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [BieuDoDHKHTheoCoDongHoComponent],
  imports: [CommonModule, PieChartModule],
  exports: [BieuDoDHKHTheoCoDongHoComponent],
})
export class BieuDoDHKHTheoCoDongHoModule {}
