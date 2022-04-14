import { Component, OnInit } from '@angular/core';
import { VienThongService } from './vien-thong.service';

@Component({
  selector: 'ga-vien-thong',
  templateUrl: './vien-thong.component.html',
  styleUrls: ['./vien-thong.component.scss']
})
export class VienThongComponent implements OnInit {
  zoom_1 : boolean = false;
  zoom_2 : boolean = false;
  zoom_3 : boolean = false;
  
  constructor(public service: VienThongService) {}
  lstYear: number[] = [];

  async ngOnInit() {
    let year = new Date().getFullYear();
    for (let i = year; i > year - 10; i--) {
      this.lstYear.push(i);
    }
    this.service.changeNamSelected([year]);
  }

}
