import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ga-cong-trinh-xay-dung',
  templateUrl: './cong-trinh-xay-dung.component.html',
  styleUrls: ['./cong-trinh-xay-dung.component.scss']
})
export class CongTrinhXayDungComponent implements OnInit {
  zoom_1: boolean = false;
  zoom_2: boolean = false;
  zoom_3: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
