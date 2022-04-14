import { Component, OnInit } from "@angular/core";
import { schemeChart } from "../../../../shared/models/color.interface";
import { ResponseStatistics } from "../../../../shared/models/thong-ke/response.model";
import { CapNuocService } from "../cap-nuoc.service";

@Component({
  selector: "ga-bieu-do-chieu-dai-co-ong",
  templateUrl: "./bieu-do-chieu-dai-co-ong.component.html",
  styleUrls: ["./bieu-do-chieu-dai-co-ong.component.css"],
})
export class BieuDoChieuDaiCoOngComponent implements OnInit {
  isLoading = false;
  value: ResponseStatistics;
  schemeChart = schemeChart;
  constructor(private service: CapNuocService) {}

  ngOnInit() {
    this.service.getChieuDaiTheoCoOng().subscribe((value) => {
      value.datas.map(item =>{
        if(item.name == null)
        {
          item.name = "Khác"
        }
        if(item.title == null)
        {
          item.title = "Khác"
        }
        return item
      })
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
