import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ga-giao-thong',
  templateUrl: './giao-thong.component.html',
  styleUrls: ['./giao-thong.component.scss']
})
export class GiaoThongComponent implements OnInit {
  zoom_1: boolean = false;
  zoom_2: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
