import { Component, OnInit } from '@angular/core';
import { CongTrinhXayDungService } from '../cong-trinh-xay-dung.service';
import { ResponseStatistics } from '../../../../shared/models/thong-ke/response.model';
import { schemeChart } from '@shared/models/color.interface';

@Component({
  selector: 'ga-bieu-do-phan-loai-ctxd',
  templateUrl: './bieu-do-phan-loai-ctxd.component.html',
  styleUrls: ['./bieu-do-phan-loai-ctxd.component.css'],
})
export class BieuDoPhanLoaiCtxdComponent implements OnInit {
  isLoading = false;
  value: ResponseStatistics;
  schemeChart = schemeChart;
  constructor(private service: CongTrinhXayDungService) { }

  ngOnInit() {
    this.service.quanHuyenSelected$.subscribe((value) => {
      this.service
        .getPhanLoaiCTXD({ maQuanHuyens: value, maPhuongXas: [] })
        .subscribe((value) => (this.value = value));
    });
    this.service.getPhanLoaiCTXD().subscribe((value) => (this.value = value));
  }

  labelFormating = (val) => {
    if (this.value.datas.length) {
      const data = this.value.datas.find((f) => f.name === val);
      if (data) {
        return data.name;
      }
    }
    return '';
  }
}
