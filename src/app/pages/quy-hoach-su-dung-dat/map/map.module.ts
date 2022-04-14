import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { MapModule as SharedMapModule } from '@shared/components/map/map.module';

@NgModule({
  declarations: [MapComponent],
  imports: [CommonModule, SharedMapModule],
  exports: [MapComponent],
})
export class MapModule {}
