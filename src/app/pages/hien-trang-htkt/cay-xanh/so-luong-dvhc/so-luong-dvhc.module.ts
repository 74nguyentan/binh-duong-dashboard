import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoLuongDvhcComponent } from './so-luong-dvhc.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [SoLuongDvhcComponent],
  imports: [CommonModule, NgxChartsModule],
  exports: [SoLuongDvhcComponent],
})
export class SoLuongDvhcModule { }
