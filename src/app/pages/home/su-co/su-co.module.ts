import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuCoComponent } from './su-co.component';
import { BarChartModule } from '@swimlane/ngx-charts';
import { SharedNebularModule } from '../../../shared/nebular.module';

@NgModule({
  declarations: [SuCoComponent],
  imports: [CommonModule, SharedNebularModule, BarChartModule],
  exports: [SuCoComponent],
})
export class SuCoModule {}
