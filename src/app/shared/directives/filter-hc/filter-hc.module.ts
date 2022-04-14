import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterHcDirective } from './filter-hc.directive';
import { FilterHcLeafletDirective } from './filter-hc-leaflet.directive';

@NgModule({
  declarations: [FilterHcDirective, FilterHcLeafletDirective],
  imports: [CommonModule],
  exports: [FilterHcDirective, FilterHcLeafletDirective],
})
export class FilterHcModule {}
