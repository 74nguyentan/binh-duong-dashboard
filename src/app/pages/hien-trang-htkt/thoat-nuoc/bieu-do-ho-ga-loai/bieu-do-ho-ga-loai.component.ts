import { Component, OnInit } from '@angular/core';
import { schemeChart } from '../../../../shared/models/color.interface';
import { ResponseStatistics } from '../../../../shared/models/thong-ke/response.model';
import { ThoatNuocService } from '../thoat-nuoc.service';

@Component({
  selector: 'ga-bieu-do-ho-ga-loai',
  templateUrl: './bieu-do-ho-ga-loai.component.html',
  styleUrls: ['./bieu-do-ho-ga-loai.component.css']
})
export class BieuDoHoGaLoaiComponent implements OnInit {
  isLoading = false;
  value: ResponseStatistics;
  schemeChart = schemeChart;
  constructor(private service: ThoatNuocService) {}

  ngOnInit() {
    this.service.quanHuyenSelected$.subscribe((value) => {
      this.service
        .getSLHoGaTheoLoai({ maQuanHuyens: value,maPhuongXas:[] })
        .subscribe((value) => (this.value = value));
    });
    this.service
      .getSLHoGaTheoLoai()
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
