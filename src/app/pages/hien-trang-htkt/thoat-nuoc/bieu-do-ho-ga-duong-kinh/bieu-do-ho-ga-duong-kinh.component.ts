import { Component, OnInit } from '@angular/core';
import { schemeChart } from '../../../../shared/models/color.interface';
import { ResponseStatistics } from '../../../../shared/models/thong-ke/response.model';
import { ThoatNuocService } from '../thoat-nuoc.service';

@Component({
  selector: 'ga-bieu-do-ho-ga-duong-kinh',
  templateUrl: './bieu-do-ho-ga-duong-kinh.component.html',
  styleUrls: ['./bieu-do-ho-ga-duong-kinh.component.css'],
})
export class BieuDoHoGaDuongKinhComponent implements OnInit {
  isLoading = false;
  value: ResponseStatistics;
  schemeChart = schemeChart;
  constructor(private service: ThoatNuocService) {}

  ngOnInit() {
    this.service.quanHuyenSelected$.subscribe((value) => {
      this.service
        .getSLHoGaTheoDuongKinh({ maQuanHuyens: value,maPhuongXas:[] })
        .subscribe((value) => (this.value = value));
    });
    this.service
      .getSLHoGaTheoDuongKinh()
      .subscribe((value) => (this.value = value));
  }

  labelFormating = (val) => {
    if (this.value.datas.length) {
      const data = this.value.datas.find((f) => f.name === val);
      if (data) {
        return data.title;
      }
    }
    return '';
  };
}
