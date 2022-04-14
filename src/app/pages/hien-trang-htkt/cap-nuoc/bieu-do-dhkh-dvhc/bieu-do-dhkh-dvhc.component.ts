import { Component, OnInit } from '@angular/core';
import { schemeChart } from '@shared/models/color.interface';
import { ResponseStatistics } from '@shared/models/thong-ke/response.model';
import { CapNuocService } from '../cap-nuoc.service';

@Component({
  selector: 'ga-bieu-do-dhkh-dvhc',
  templateUrl: './bieu-do-dhkh-dvhc.component.html',
  styleUrls: ['./bieu-do-dhkh-dvhc.component.css']
})
export class BieuDoDHKHDvhcComponent implements OnInit {

  isLoading = false;
  value: ResponseStatistics;
  schemeChart = schemeChart;
  constructor(private service: CapNuocService) {}

  ngOnInit() {
    this.service.getSLDHKHTheoDVHC().subscribe((value) => (this.value = value));
  }

  xAxisTickFormatting = (val) => {
    if (this.value.datas.length) {
      const data = this.value.datas.find((f) => f.name === val);
      if (data) {
        return data.title;
      }
    }
    return '';
  };
}
