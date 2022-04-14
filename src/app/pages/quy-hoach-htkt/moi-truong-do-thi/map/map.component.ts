import { Component, OnInit } from '@angular/core';
import { DynamicMapLayer } from 'esri-leaflet';
import { loadModules } from 'esri-loader';
import { MoiTruongDoThiService } from '../moi-truong-do-thi.service';

@Component({
  selector: 'ga-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  constructor(public service:MoiTruongDoThiService) {
    
  }

  ngOnInit(): void {}

  async loaded(map: L.Map) {
    new DynamicMapLayer({
      url:
      'http://171.244.32.245/arcgis/rest/services/HienTrang/HT_BVMT/MapServer',
    }).addTo(map);
  }

  
}


