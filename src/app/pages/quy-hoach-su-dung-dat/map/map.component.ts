import { Component, OnInit } from '@angular/core';
import { loadModules } from 'esri-loader';
import { QuyHoachSuDungDatService } from '../quy-hoach-su-dung-dat.service';

@Component({
  selector: 'ga-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  layer: __esri.FeatureLayer;
  view: __esri.MapView;
  constructor(private service: QuyHoachSuDungDatService) {}

  ngOnInit() {
    this.service.quanHuyenSelected$.subscribe((pQuanHuyens) => {
      if(pQuanHuyens.length > 0){
        this.goTo(pQuanHuyens)
      }
    });
  }

  async loaded(view: __esri.MapView) {
    this.view = view;
    type MapModule = [typeof import('esri/layers/TileLayer'),typeof import('esri/layers/FeatureLayer')]
    const [TileLayer,FeatureLayer] = await (loadModules([
      'esri/layers/TileLayer',
      'esri/layers/FeatureLayer'
    ]) as Promise<MapModule>);
    this.layer = new FeatureLayer({
      url: 'http://171.244.32.245/arcgis/rest/services/Nen/MapServer/4',
      visible: false
    });
    view.map.add(this.layer);
    view.map.add( new TileLayer({
      url:
        'http://171.244.32.245/arcgis/rest/services/SuDungDat/ThongTinQuyHoachSDD_WGS1984/MapServer',
    })
    );
  }
  goTo(values: string[]) {
    if (this.layer) {
      const maQuanHuyen = values.map(f =>f)
      this.layer
        .queryFeatures({
          where: `MaQuanHuyen IN (${maQuanHuyen.toString()})`,
          returnGeometry: true,
          outSpatialReference: this.view.spatialReference,
        })
        .then(({ features }) =>
          this.view.goTo(features)
        );
    }
  }
}

