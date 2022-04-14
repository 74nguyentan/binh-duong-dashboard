import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Output,
  EventEmitter,
  Input,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { loadModules } from 'esri-loader';
import { environment } from '../../../../environments/environment';
import { NbThemeService } from '@nebular/theme';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'ga-shared-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('viewDiv', { static: false }) viewDiv: ElementRef<HTMLDivElement>;
  @Input() viewDivStyle;
  @Input() mapProperties: __esri.MapProperties;
  @Input() viewProperties: __esri.MapViewProperties;
  @Output() loaded = new EventEmitter<__esri.MapView>();
  private destroy$: Subject<void> = new Subject<void>();
  mapView: __esri.MapView;
  constructor(private themeService: NbThemeService) {}

  ngOnInit() {}
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  async ngAfterViewInit() {
    type MapModule = [
      typeof import('esri/Map'),
      typeof import('esri/views/MapView'),
      typeof import('esri/Basemap')
    ];
    const [Map, MapView, Basemap] = await (loadModules([
      'esri/Map',
      'esri/views/MapView',
      'esri/Basemap',
    ]) as Promise<MapModule>);
    this.mapView = new MapView({
      ...this.viewProperties,
      center: environment.map.center,
      scale: environment.map.scale,
      map: new Map({
        ...this.mapProperties,
        basemap: 'gray',
      }),
      container: this.viewDiv.nativeElement,
    });
    this.loaded.emit(this.mapView);
    this.themeService
      .onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$)
      )
      .subscribe((name) => {
        if (name === 'dark') {
          this.mapView.map.basemap = Basemap.fromId('dark-gray');
        } else {
          this.mapView.map.basemap = Basemap.fromId('gray');
        }
      });
  }
}
