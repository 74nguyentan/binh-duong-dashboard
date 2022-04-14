import { Component, OnInit } from "@angular/core";
export interface Fruit {
  name: string;
}

import { GiaoThongService } from "./giao-thong.service";

@Component({
  selector: "ga-giao-thong",
  templateUrl: "./giao-thong.component.html",
  styleUrls: ["./giao-thong.component.scss"],
})
export class GiaoThongComponent implements OnInit {
  zoom_1 : boolean = false;
  zoom_2 : boolean = false;
 

  constructor(public service: GiaoThongService) {}
  lstYear: number[] = [];

  async ngOnInit() {
    let year = new Date().getFullYear();
    for (let i = year; i > year - 10; i--) {
      this.lstYear.push(i);
    }
    this.service.changeNamSelected([year]);
  }
}
