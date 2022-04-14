import { Component, OnInit } from '@angular/core';
import { MoiTruongDoThiService } from './moi-truong-do-thi.service';

@Component({
  selector: 'ga-moi-truong-do-thi',
  templateUrl: './moi-truong-do-thi.component.html',
  styleUrls: ['./moi-truong-do-thi.component.scss']
})
export class MoiTruongDoThiComponent implements OnInit {
  zoom_1 : boolean = false;
  zoom_2 : boolean = false;
  
  constructor(public service: MoiTruongDoThiService) {}
  lstYear: number[] = [];

  async ngOnInit() {
    let year = new Date().getFullYear();
    for (let i = year; i > year - 10; i--) {
      this.lstYear.push(i);
    }
    this.service.changeNamSelected([year]);
  }

}
