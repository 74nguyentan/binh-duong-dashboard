import { Component, OnInit } from '@angular/core';
import { CongTrinhXayDungService } from './cong-trinh-xay-dung.service';

@Component({
  selector: 'ga-cong-trinh-xay-dung',
  templateUrl: './cong-trinh-xay-dung.component.html',
  styleUrls: ['./cong-trinh-xay-dung.component.scss']
})
export class CongTrinhXayDungComponent implements OnInit {

  constructor(public service: CongTrinhXayDungService) {}
  lstYear: number[] = [];

  async ngOnInit() {
    let year = new Date().getFullYear();
    for (let i = year; i > year - 10; i--) {
      this.lstYear.push(i);
    }
    this.service.changeNamSelected([year]);
  }

}
