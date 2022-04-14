import { Component, OnInit } from '@angular/core';
import { ThoatNuocService } from './thoat-nuoc.service';

@Component({
  selector: 'ga-thoat-nuoc',
  templateUrl: './thoat-nuoc.component.html',
  styleUrls: ['./thoat-nuoc.component.scss']
})
export class ThoatNuocComponent implements OnInit {
  zoom_1 : boolean = false;
  zoom_2 : boolean = false;
  zoom_3 : boolean = false;
  zoom_4 : boolean = false;
  
  constructor(public service: ThoatNuocService) {}
  lstYear: number[] = [];

  async ngOnInit() {
    let year = new Date().getFullYear();
    for (let i = year; i > year - 10; i--) {
      this.lstYear.push(i);
    }
    this.service.changeNamSelected([year]);
  }

}
