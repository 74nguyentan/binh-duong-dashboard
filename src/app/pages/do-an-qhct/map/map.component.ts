import { Component, OnInit } from '@angular/core';
import { GeoJSON } from 'leaflet';
import { FeatureLayer } from 'esri-leaflet';
import { Control, FeatureGroup, LayerGroup, Polygon, Popup } from 'leaflet';
import { DoAnService } from '../../../shared/services/do-an/do-an.service';
import { GeometryService } from '../../../shared/services/map/geometry-service';

@Component({
  selector: 'ga-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  constructor(
    private daService: DoAnService,
    private geometryService: GeometryService
  ) {}

  ngOnInit(): void {}

  async loaded(map: L.Map) {
    new FeatureLayer({
      url: 'http://171.244.32.245/arcgis/rest/services/Nen/MapServer/4',
      style: function (feature) {
        return { color: 'blue', fillColor: 'black', weight: 2 };
      },
    }).addTo(map);
    let data = await this.daService
      .getMany({
        fields: ['maDoAn', 'shape', 'tenDoAn'],
        join: [
          {
            field: 'quyHoachChiTiet',
            select: ['maLoaiQHCT'],
          },
        ],
        filter: [
          // {field:'quyHoachChiTiet',operator:'$notnull'}
        ],
        limit: 1000,
      })
      .toPromise();
    data = data.filter((f) => f.quyHoachChiTiet);

    const { geometries } = await this.geometryService
      .project({
        geometries: data.map((m) => m.shape),
        geometryType: 'esriGeometryPolygon',
        outSR: { wkid: 4326 } as any,
      })
      .toPromise();

    const qhctGraphics: Polygon[] = [],
      bdsGraphics: Polygon[] = [];

    geometries.forEach((geo: __esri.Polygon, index) => {
      const rings = geo.rings[0].map((r) => [r[1], r[0]]);
      const polygon = new Polygon(rings as any);
      const attr = data[index];
      polygon.bindPopup(attr.tenDoAn);
      if (data[index].quyHoachChiTiet.maLoaiQHCT === 'BDS') {
        polygon.options.color = '#6395FA';
        bdsGraphics.push(polygon);
      } else {
        polygon.options.color = '#F7C122';
        qhctGraphics.push(polygon);
      }
      // polygon.addTo(map);
      // new LayerGroup([polygon])
    });
    const qhctLyr = new FeatureGroup(bdsGraphics).addTo(map);
    const bdsLyr = new FeatureGroup(qhctGraphics).addTo(map);
    new Control.Layers(undefined, {
      Khác: qhctLyr,
      'Bất động sản': bdsLyr,
    }).addTo(map);
    // view.map.addMany([qhctLyr, bdsLyr]);
    // qhctLyr.addMany(qhctGraphics);
    // bdsLyr.addMany(bdsGraphics);
  }
}
