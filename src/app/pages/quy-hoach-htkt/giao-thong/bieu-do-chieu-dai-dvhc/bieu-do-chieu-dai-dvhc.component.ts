import { Component, OnInit } from "@angular/core";
import { schemeChart } from "../../../../shared/models/color.interface";
import { ResponseStatistics } from "../../../../shared/models/thong-ke/response.model";
import { GiaoThongService } from "../giao-thong.service";

@Component({
  selector: "ga-bieu-do-chieu-dai-dvhc",
  templateUrl: "./bieu-do-chieu-dai-dvhc.component.html",
  styleUrls: ["./bieu-do-chieu-dai-dvhc.component.css"],
})
export class BieuDoChieuDaiDvhcComponent implements OnInit {
  isLoading = false;
  value: ResponseStatistics;
  schemeChart = schemeChart;
  private nam: number[];
  constructor(private service: GiaoThongService) {}

  ngOnInit() {
    this.service.namSelected$.subscribe((nams) => {
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
      .getChieuDaiTheoDVHC(nam)
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
