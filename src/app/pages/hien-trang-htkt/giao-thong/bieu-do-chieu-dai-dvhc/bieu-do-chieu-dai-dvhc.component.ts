import { Component, OnInit } from '@angular/core';
import { schemeChart } from '../../../../shared/models/color.interface';
import { ResponseStatistics } from '../../../../shared/models/thong-ke/response.model';
import { GiaoThongService } from '../giao-thong.service';

@Component({
  selector: 'ga-bieu-do-chieu-dai-dvhc',
  templateUrl: './bieu-do-chieu-dai-dvhc.component.html',
  styleUrls: ['./bieu-do-chieu-dai-dvhc.component.css'],
})
export class BieuDoChieuDaiDvhcComponent implements OnInit {
  isLoading = false;
  value: ResponseStatistics;
  schemeChart = schemeChart;
  constructor(private service: GiaoThongService) {}

  ngOnInit() {
    this.service
      .getChieuDaiTheoDVHC()
      .subscribe((value) => (this.value = value));
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
