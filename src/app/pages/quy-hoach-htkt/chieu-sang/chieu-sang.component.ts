import { Component, OnInit } from '@angular/core';
import { ChieuSangService } from './chieu-sang.service';

@Component({
  selector: 'ga-chieu-sang',
  templateUrl: './chieu-sang.component.html',
  styleUrls: ['./chieu-sang.component.scss']
})
export class ChieuSangComponent implements OnInit {
  zoom_1 : boolean = false;
  
  constructor(public service: ChieuSangService) {}
  lstYear: number[] = [];

  async ngOnInit() {
    let year = new Date().getFullYear();
    for (let i = year; i > year - 10; i--) {
      this.lstYear.push(i);
    }
    this.service.changeNamSelected([year]);
  }
}
