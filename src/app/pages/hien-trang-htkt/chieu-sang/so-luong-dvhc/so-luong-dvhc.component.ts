import { Component, OnInit } from '@angular/core';
import { schemeChart } from '../../../../shared/models/color.interface';
import { ResponseStatistics } from '../../../../shared/models/thong-ke/response.model';
import { ChieuSangService } from '../chieu-sang.service';

@Component({
  selector: 'ga-so-luong-dvhc',
  templateUrl: './so-luong-dvhc.component.html',
  styleUrls: ['./so-luong-dvhc.component.css'],
})
export class SoLuongDvhcComponent implements OnInit {
  isLoading = false;
  value: ResponseStatistics;
  schemeChart = schemeChart;
  constructor(private service: ChieuSangService) {}

  ngOnInit() {
    this.service.getChieuDaiTuyenDayCSTheoDVHC().subscribe((value) => (this.value = value));
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
