import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BieuDoSddQhctNamComponent } from './bieu-do-sdd-qhct-nam.component';
import { LineChartModule } from '@swimlane/ngx-charts';
import { NbSpinnerModule } from '@nebular/theme';

@NgModule({
  declarations: [BieuDoSddQhctNamComponent],
  imports: [CommonModule, LineChartModule, NbSpinnerModule],
  exports: [BieuDoSddQhctNamComponent],
})
export class BieuDoSddQhctNamModule { }
