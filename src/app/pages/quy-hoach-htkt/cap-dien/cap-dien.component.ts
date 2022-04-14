import { Component, OnInit } from '@angular/core';
import { CapDienService } from './cap-dien.service';

@Component({
  selector: 'ga-cap-dien',
  templateUrl: './cap-dien.component.html',
  styleUrls: ['./cap-dien.component.scss']
})
export class CapDienComponent implements OnInit {
  zoom_1 : boolean = false;
  zoom_2 : boolean = false;
  zoom_3 : boolean = false;
  
  constructor(public service: CapDienService) { }

  lstYear: number[] = [];

  async ngOnInit() {
    let year = new Date().getFullYear();
    for (let i = year; i > year - 10; i--) {
      this.lstYear.push(i);
    }
    this.service.changeNamSelected([year]);
  }

}
