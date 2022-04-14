import { Component, OnInit } from "@angular/core";
import { schemeChart } from "../../../../shared/models/color.interface";
import { ResponseStatistics } from "../../../../shared/models/thong-ke/response.model";
import { CapNuocService } from "../cap-nuoc.service";

@Component({
  selector: "ga-bieu-do-dhkh-co-dong-ho",
  templateUrl: "./bieu-do-dhkh-co-dong-ho.component.html",
  styleUrls: ["./bieu-do-dhkh-co-dong-ho.component.css"],
})
export class BieuDoDHKHTheoCoDongHoComponent implements OnInit {
  isLoading = false;
  value: ResponseStatistics;
  schemeChart = schemeChart;
  constructor(private service: CapNuocService) {}

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
    this.service.getSLDHKHTheoCoDongHo(nam).subscribe((value) => {
      value.datas.map((item) => {
        if (item.name == null) {
          item.name = "Khác";
        }
        if (item.title == null) {
          item.title = "Khác";
        }
        return item;
      });
      this.value = value;
    });
  }
  labelFormating = (val) => {
    if (this.value.datas.length) {
      const data = this.value.datas.find((f) => f.name === val);
      if (data) {
        return data.title;
      }
    }
    return "";
  };
}
