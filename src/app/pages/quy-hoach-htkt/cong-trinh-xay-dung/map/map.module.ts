import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { MapModule as SharedMapModule } from '@shared/components/map/map.module';
import { FilterHcModule } from '../../../../shared/directives/filter-hc/filter-hc.module';

@NgModule({
  declarations: [MapComponent],
  imports: [CommonModule, SharedMapModule,FilterHcModule],
  exports: [MapComponent],
})
export class MapModule {}
