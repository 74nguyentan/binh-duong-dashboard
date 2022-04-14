import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoLuongComponent } from './so-luong.component';
import { NbCardModule } from '@nebular/theme';
import { ChartCommonModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [SoLuongComponent],
  imports: [CommonModule, NbCardModule, ChartCommonModule],
  exports: [SoLuongComponent],
})
export class SoLuongModule {}
