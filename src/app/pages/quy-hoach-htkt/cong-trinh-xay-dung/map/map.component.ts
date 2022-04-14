import { Component, OnInit } from '@angular/core';
import { DynamicMapLayer } from 'esri-leaflet';
import { loadModules } from 'esri-loader';
import { BehaviorSubject, Subject } from 'rxjs';
import { CongTrinhXayDungService } from '../cong-trinh-xay-dung.service';

@Component({
  selector: 'ga-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  constructor(public service: CongTrinhXayDungService) {}
  ngOnInit(): void {
  }

  async loaded(map: L.Map) {
    new DynamicMapLayer({
      url:
        'http://gisxd.binhduong.gov.vn/arcgis/rest/services/HienTrang/CongTrinhXD/MapServer',
    }).addTo(map);
  }
}
