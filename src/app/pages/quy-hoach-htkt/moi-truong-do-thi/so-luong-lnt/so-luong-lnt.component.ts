import { Component, OnInit } from "@angular/core";
import { schemeChart } from "../../../../shared/models/color.interface";
import { ResponseStatistics } from "../../../../shared/models/thong-ke/response.model";
import { MoiTruongDoThiService } from "../moi-truong-do-thi.service";

@Component({
  selector: "ga-so-luong-lnt",
  templateUrl: "./so-luong-lnt.component.html",
  styleUrls: ["./so-luong-lnt.component.css"],
})
export class SoLuongLntComponent implements OnInit {
  isLoading = false;
  value: ResponseStatistics;
  schemeChart = schemeChart;
  constructor(private service: MoiTruongDoThiService) {}

  ngOnInit() {
    this.service.quanHuyenSelected$.subscribe((value) => {
      this.service
        .getSoLuongLnt("", { maQuanHuyens: value, maPhuongXas: [] })
        .subscribe((value) => (this.value = value));
    });
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
    this.service.getSoLuongLnt(nam).subscribe((value) => (this.value = value));
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
