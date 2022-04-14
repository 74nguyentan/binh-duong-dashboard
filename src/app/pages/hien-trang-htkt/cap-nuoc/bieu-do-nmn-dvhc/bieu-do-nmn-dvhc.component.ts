import { Component, OnInit } from "@angular/core";
import { schemeChart } from "@shared/models/color.interface";
import { ResponseStatistics } from "@shared/models/thong-ke/response.model";
import { CapNuocService } from "../cap-nuoc.service";

@Component({
  selector: "ga-bieu-do-nmn-dvhc",
  templateUrl: "./bieu-do-nmn-dvhc.component.html",
  styleUrls: ["./bieu-do-nmn-dvhc.component.css"],
})
export class BieuDoNMNDvhcComponent implements OnInit {
  isLoading = false;
  value: ResponseStatistics;
  schemeChart = schemeChart;
  constructor(private service: CapNuocService) {}

  ngOnInit() {
    this.service.getCSNMNTheoDVHC().subscribe((value) => {
      
      this.value = value;
    });
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
