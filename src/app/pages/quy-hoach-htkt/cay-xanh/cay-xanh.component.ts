import { Component, OnInit } from "@angular/core";
import { CayXanhService } from "./cay-xanh.service";

@Component({
  selector: "ga-cay-xanh",
  templateUrl: "./cay-xanh.component.html",
  styleUrls: ["./cay-xanh.component.scss"],
})
export class CayXanhComponent implements OnInit {
  zoom_1 : boolean = false;
 
  
  constructor(public service: CayXanhService) {}
  lstYear: number[] = [];

  async ngOnInit() {
    let year = new Date().getFullYear();
    for (let i = year; i > year - 10; i--) {
      this.lstYear.push(i);
    }
    this.service.changeNamSelected([year]);
  }
}
