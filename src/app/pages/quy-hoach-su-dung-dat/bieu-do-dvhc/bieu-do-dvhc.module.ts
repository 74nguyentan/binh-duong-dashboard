import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BieuDoDvhcComponent } from './bieu-do-dvhc.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NbSpinnerModule } from '@nebular/theme';

@NgModule({
  declarations: [BieuDoDvhcComponent],
  imports: [CommonModule, NgxChartsModule, NbSpinnerModule],
  exports: [BieuDoDvhcComponent],
})
export class BieuDoDvhcModule { }
