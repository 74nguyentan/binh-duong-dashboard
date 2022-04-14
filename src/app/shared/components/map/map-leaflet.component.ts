import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Subject } from 'rxjs';
import { CRS, Map, TileLayer } from 'leaflet';

@Component({
  selector: 'map-leaflet',
  template: '<div #viewDiv class="viewDiv" [ngStyle]="viewDivStyle"></div>',
  styles:[
    `
    .leaflet-container{height:100%}
    `
  ]
})
export class MapLeafletComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('viewDiv', { static: false }) viewDiv: ElementRef<HTMLDivElement>;
  @Input() viewDivStyle;
  @Output() loaded = new EventEmitter<Map>();
  private destroy$: Subject<void> = new Subject<void>();
  map: Map;
  constructor() {}

  ngOnInit() {}
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  async ngAfterViewInit() {
    this.map = new Map(this.viewDiv.nativeElement);
   this.map.setView([11.003333051809285, 106.64322877223502], 10);
    this.map.addLayer(
      new TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      })
    );
    this.loaded.emit(this.map);
  }
}
