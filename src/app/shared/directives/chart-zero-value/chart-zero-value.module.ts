import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChartZeroValueDirective } from './chart-zero-value.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [ChartZeroValueDirective],
  exports: [ChartZeroValueDirective],
})
export class ChartZeroValueModule {}
