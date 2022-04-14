import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BieuDoMdsddTdaComponent } from './bieu-do-mdsdd-tda.component';
import { PieChartModule } from '@swimlane/ngx-charts';
import { SelectMdssdTdaModule } from '@shared/components/select-mdssd-tda/select-mdssd-tda.module';
import { ChartZeroValueModule } from '@shared/directives/chart-zero-value/chart-zero-value.module';



@NgModule({
  declarations: [BieuDoMdsddTdaComponent],
  imports: [
    CommonModule,PieChartModule,SelectMdssdTdaModule,ChartZeroValueModule
  ],
  exports:[BieuDoMdsddTdaComponent]
})
export class BieuDoMdsddTdaModule { }
