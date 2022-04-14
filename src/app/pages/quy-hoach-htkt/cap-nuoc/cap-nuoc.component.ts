import { Component, OnInit } from '@angular/core';
import { CapNuocService } from './cap-nuoc.service';

@Component({
  selector: 'ga-cap-nuoc',
  templateUrl: './cap-nuoc.component.html',
  styleUrls: ['./cap-nuoc.component.scss']
})
export class CapNuocComponent implements OnInit {
  zoom_1 : boolean = false;
  zoom_2 : boolean = false;
  zoom_3 : boolean = false;
  zoom_4 : boolean = false;
  zoom_5 : boolean = false;
  zoom_6 : boolean = false;
  zoom_7 : boolean = false;
 
  constructor(public service: CapNuocService) { }
  lstYear: number[] = [];

  async ngOnInit() {
    const year = new Date().getFullYear();
    for (let i = year; i > year - 10; i--) {
      this.lstYear.push(i);
    }
    this.service.changeNamSelected([year]);
  }

}
