import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';
import { FeatureLayer, Query } from 'esri-leaflet';
import { FeatureGroup, Polygon, GeoJSON, geoJSON } from 'leaflet';
import { MapLeafletComponent } from '../../components/map/map-leaflet.component';

@Directive({
  selector: 'map-leaflet[filterHcLeaflet]',
})
export class FilterHcLeafletDirective {
  @Output() changeQuanHuyen = new EventEmitter<{
    type: 'add' | 'delete';
    maQuanHuyen?: string;
    maQuanHuyens: string[];
  }>();
  @Output() changePhuongXa = new EventEmitter<{
    type: 'add' | 'delete';
    maPhuongXa?: string;
    maPhuongXas: string[];
  }>();
  private quanHuyenSelecteds: string[] = [];
  private phuongXaSelecteds: string[] = [];

  gSelectQH = new FeatureGroup();
  gSelectPX = new FeatureGroup();
  gPx = new FeatureGroup();
  queryPX = new Query({
    url: 'http://171.244.32.245/arcgis/rest/services/Nen/MapServer/3',
  });
  get map() {
    return this.ref.map;
  }
  constructor(private ref: MapLeafletComponent) {
    this.ref.loaded.subscribe(async (map: L.Map) => {
      if (map) {
        const lyrQuanHuyen = new FeatureLayer({
          url: 'http://171.244.32.245/arcgis/rest/services/Nen/MapServer/4',
          fields: ['OBJECTID', 'MaQuanHuyen'],
        }).addTo(map);

        map.addLayer(this.gSelectQH);
        map.addLayer(this.gSelectPX);
        map.on('zoomend', this.handleZoomEnd);
        lyrQuanHuyen.on('click', this.handleClickQuanHuyen);
      }
    });
  }

  private handleClickQuanHuyen = (e) => {
    const polygon = GeoJSON.geometryToLayer(
      e.sourceTarget.feature.geometry
    ) as Polygon;
    polygon.options.color = 'red';
    polygon.addTo(this.gSelectQH);
    const maQuanHuyen = e.sourceTarget.feature.properties.MaQuanHuyen;
    this.quanHuyenSelecteds.push(maQuanHuyen);
    this.changeQuanHuyen.emit({
      type: 'add',
      maQuanHuyens: this.quanHuyenSelecteds,
      maQuanHuyen,
    });
    this.hienThiPX(maQuanHuyen).then((features) => {
      polygon.on('click', () => {
        // xóa quận huyện
        polygon.remove();
        // xóa phường xã
        this.quanHuyenSelecteds.splice(
          this.quanHuyenSelecteds.indexOf(maQuanHuyen),
          1
        );
        this.changeQuanHuyen.emit({
          type: 'delete',
          maQuanHuyen,
          maQuanHuyens: this.quanHuyenSelecteds,
        });

        // xóa phường xã được chọn
        this.gSelectPX.eachLayer((layer: any) => {
          layer.eachLayer((e) => {
            if (e.feature.properties.MaQuanHuyen === maQuanHuyen) {
              const maPhuongXa = e.feature.properties.MaPhuongXa;
              this.phuongXaSelecteds.splice(
                this.phuongXaSelecteds.indexOf(maPhuongXa),
                1
              );
              layer.remove();
            }
          });
        });
        this.gPx.eachLayer((layer: any) => {
          layer.eachLayer((e) => {
            if (e.feature.properties.MaQuanHuyen === maQuanHuyen) {
              layer.remove();
            }
          });
        });
        this.changePhuongXa.emit({
          type: 'delete',
          maPhuongXas: this.phuongXaSelecteds,
        });
      });
    });
  };

  private hienThiPX = (maQuanHuyen: string) => {
    return new Promise<GeoJSON>((resolve) => {
      this.queryPX
        .where(`MaQuanHuyen='${maQuanHuyen}'`)
        .fields(['MaPhuongXa', 'MaQuanHuyen'])
        .returnGeometry(true)
        .run((error, featureCollection: GeoJSON.FeatureCollection, _) => {
          const features = geoJSON(featureCollection).addTo(this.gPx);
          resolve(features);
          features.on('click', (e) => {
            const px = geoJSON(e.sourceTarget.feature, {
              style: {
                color: 'yellow',
              },
            });
            const maPhuongXa = e.sourceTarget.feature.properties.MaPhuongXa;
            px.addTo(this.gSelectPX);
            this.phuongXaSelecteds.push(maPhuongXa);
            this.changePhuongXa.emit({
              type: 'add',
              maPhuongXa,
              maPhuongXas: this.phuongXaSelecteds,
            });
            px.on('click', () => {
              px.remove();

              this.phuongXaSelecteds.splice(
                this.phuongXaSelecteds.indexOf(maPhuongXa),
                1
              );
              this.changePhuongXa.emit({
                type: 'delete',
                maPhuongXa,
                maPhuongXas: this.phuongXaSelecteds,
              });
            });
          });
        });
    });
  };

  private handleZoomEnd = () => {
    if (this.map.getZoom() >= 14) {
      this.gPx.addTo(this.map);
    } else {
      this.gPx.remove();
    }
  };
}
