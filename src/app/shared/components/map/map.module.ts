import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { MapService } from './map.service';
import { MapLeafletComponent } from './map-leaflet.component';

@NgModule({
  declarations: [MapComponent,MapLeafletComponent],
  imports: [CommonModule],
  exports: [MapComponent,MapLeafletComponent],
  providers: [MapService],
})
export class MapModule {}
