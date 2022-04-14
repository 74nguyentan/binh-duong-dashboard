import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';
import { loadModules } from 'esri-loader';
import { MapComponent } from '../../components/map/map.component';

@Directive({
  selector: '[gaFilterHc]',
})
export class FilterHcDirective {
  private lyrQuanHuyen: __esri.FeatureLayer;
  private lyrPhuongXa: __esri.FeatureLayer;
  private graphicsLayer: __esri.GraphicsLayer;
  @Output() chonQuanHuyen = new EventEmitter<string>();
  get view() {
    return this.ref.mapView;
  }
  constructor(private ref: MapComponent) {
    this.ref.loaded.subscribe(async (loaded) => {
      if (loaded) {
        type MapModule = [
          typeof import('esri/layers/FeatureLayer'),
          typeof import('esri/layers/GraphicsLayer'),
          typeof import('esri/Graphic'),
          typeof import('esri/symbols/SimpleFillSymbol')
        ];
        const [
          FeatureLayer,
          GraphicsLayer,
          SimpleFillSymbol,
        ] = await (loadModules([
          'esri/layers/FeatureLayer',
          'esri/layers/GraphicsLayer',
          'esri/Graphic',
          'esri/symbols/SimpleFillSymbol',
        ]) as Promise<MapModule>);
        // add graphicsLayer vào bản đồ

        this.graphicsLayer = new GraphicsLayer({});

        // bản đồ nền quận huyện
        this.lyrQuanHuyen = new FeatureLayer({
          url: 'http://171.244.32.245/arcgis/rest/services/Nen/MapServer/4',
          id: 'quanHuyen',
          outFields: ['MaQuanHuyen'],
        });

        // bản đồ nền phường xã
        this.lyrPhuongXa = new FeatureLayer({
          url: 'http://171.244.32.245/arcgis/rest/services/Nen/MapServer/3',
          id: 'phuongXa',
          definitionExpression: '1=2',
          outFields: ['MaPhuongXa'],
        });

        this.view.map.addMany([
          this.lyrQuanHuyen,
          this.lyrPhuongXa,
          this.graphicsLayer,
        ]);
        // bắt sự kiện click vào bản đồ
        this.view.on('click', (e) => {
          this.view.hitTest(e).then(async (e) => {
            const graphic = e.results[0].graphic;
            if(!graphic){
              return;
            }
            const maQuanHuyen = graphic.getAttribute('MaQuanHuyen');
            if (graphic.layer.id === 'quanHuyen') {
              // kiểm tra nếu đã highlight rồi thì xóa highlight
              if (
                this.graphicsLayer.graphics.some(
                  (s) => s.getAttribute('MaQuanHuyen') === maQuanHuyen
                )
              ) {
                this.graphicsLayer.remove(
                  this.graphicsLayer.graphics.find(
                    (s) => s.getAttribute('MaQuanHuyen') === maQuanHuyen
                  )
                );
                this.chonQuanHuyen.emit(maQuanHuyen);
              } else {
                const gPX = graphic.clone();

                // gPX.symbol = new SimpleFillSymbol({
                //   color: [99, 149, 250, 0.7],
                //   style: 'solid',
                //   outline: {
                //     color: 'white',
                //     width: 1,
                //   },
                // });
                this.graphicsLayer.add(gPX);
              }
              // load phường xã trong quận huyện được chọn
              this.loadMapPhuongXa();
            } else if (graphic.layer.id === 'phuongXa') {
              if (
                this.graphicsLayer.graphics.some(
                  (s) =>
                    s.attributes.MaPhuongXa === graphic.attributes.MaPhuongXa
                )
              ) {
                this.graphicsLayer.remove(
                  this.graphicsLayer.graphics.find(
                    (s) =>
                      s.attributes.MaPhuongXa === graphic.attributes.MaPhuongXa
                  )
                );
              } else {
                const gPX = graphic.clone();

                // gPX.symbol = new SimpleFillSymbol({
                //   color: [233, 112, 83, 0.7],
                //   style: 'solid',
                //   outline: {
                //     color: 'white',
                //     width: 1,
                //   },
                // });
                this.graphicsLayer.add(gPX);
              }
            }
          });
        });
      }
    });
  }

  loadMapPhuongXa() {
    // if (this.highlightMap.length > 0) {
    //   const value = this.highlightMap.map((f) => f.maQuanHuyen);
    //   this.lyrPhuongXa.definitionExpression = `MaQuanHuyen IN (${value.toString()})`;
    // }
  }
}
