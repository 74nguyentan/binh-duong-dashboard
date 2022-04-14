import { Component, OnInit } from '@angular/core';
import { COLORS, schemeChart } from '../../../../shared/models/color.interface';
import { ResponseStatistics } from '../../../../shared/models/thong-ke/response.model';
import { CapDienService } from '../cap-dien.service';

@Component({
  selector: 'ga-chieu-dai-dien-ap',
  templateUrl: './chieu-dai-dien-ap.component.html',
  styleUrls: ['./chieu-dai-dien-ap.component.css'],
})
export class ChieuDaiDienApComponent implements OnInit {
  isLoading = false;
  value: ResponseStatistics;
  schemeChart = { domain: [COLORS[1]] };
  constructor(private service: CapDienService) {}

  ngOnInit() {
    this.service.quanHuyenSelected$.subscribe((value) => {
      this.service
        .getChieuDaiTheoDienAp({ maQuanHuyens: value,maPhuongXas:[] })
        .subscribe((value) => (this.value = value));
    });
    this.service
      .getChieuDaiTheoDienAp()
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
