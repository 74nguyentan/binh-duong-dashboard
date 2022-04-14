import { Component, OnInit } from "@angular/core";
import { schemeChart } from "@shared/models/color.interface";
import { ResponseStatistics } from "@shared/models/thong-ke/response.model";
import { ThoatNuocService } from "../thoat-nuoc.service";

@Component({
  selector: "ga-bieu-do-ho-ga-dvhc",
  templateUrl: "./bieu-do-ho-ga-dvhc.component.html",
  styleUrls: ["./bieu-do-ho-ga-dvhc.component.css"],
})
export class BieuDoHoGaDvhcComponent implements OnInit {
  isLoading = false;
  value: ResponseStatistics;
  schemeChart = schemeChart;
  constructor(private service: ThoatNuocService) {}

  ngOnInit() {
    this.service.namSelected$.subscribe((nams) => {
      console.log("so luong nam async");
      let namString = "";
      if (nams.length > 0) namString = "?";
      nams.forEach((f) => {
        namString += `nam=${f}&`;
      });
      namString = namString.slice(0, namString.length - 1);
      this.loadData(namString);
    });
    this.loadData("");
  }
  private loadData(nam: string) {
    this.service
      .getSLHoGaTheoDVHC(nam)
      .subscribe((value) => (this.value = value));
  }
  xAxisTickFormatting = (val) => {
    if (this.value.datas.length) {
      const data = this.value.datas.find((f) => f.name === val);
      if (data) {
        return data.title;
      }
    }
    return "";
  };
}
