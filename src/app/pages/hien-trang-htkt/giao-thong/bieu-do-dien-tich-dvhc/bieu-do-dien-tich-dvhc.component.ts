import { Component, OnInit } from '@angular/core';
import { schemeChart } from '../../../../shared/models/color.interface';
import { ResponseStatistics } from '../../../../shared/models/thong-ke/response.model';
import { GiaoThongService } from '../giao-thong.service';

@Component({
  selector: 'ga-bieu-do-dien-tich-dvhc',
  templateUrl: './bieu-do-dien-tich-dvhc.component.html',
  styleUrls: ['./bieu-do-dien-tich-dvhc.component.css']
})
export class BieuDoDienTichDvhcComponent implements OnInit {
  isLoading = false;
  value: ResponseStatistics;
  schemeChart = schemeChart;
  constructor(private service: GiaoThongService) {}

  ngOnInit() {
    this.service
      .getDienTichTheoDVHC()
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
