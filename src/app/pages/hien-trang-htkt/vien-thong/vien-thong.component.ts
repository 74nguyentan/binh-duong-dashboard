import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ga-vien-thong',
  templateUrl: './vien-thong.component.html',
  styleUrls: ['./vien-thong.component.scss']
})
export class VienThongComponent implements OnInit {
  zoom_1 : boolean = false;
  zoom_2 : boolean = false;
  zoom_3 : boolean = false;
 
  constructor() { }

  ngOnInit(): void {
  }

}
