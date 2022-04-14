import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ga-moi-truong-do-thi',
  templateUrl: './moi-truong-do-thi.component.html',
  styleUrls: ['./moi-truong-do-thi.component.scss']
})
export class MoiTruongDoThiComponent implements OnInit {
  zoom_1: boolean = false;
  zoom_2: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
