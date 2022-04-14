import { Component, OnInit } from '@angular/core';
import { schemeChart } from '@shared/models/color.interface';
import { ResponseStatistics } from '@shared/models/thong-ke/response.model';
import { VienThongService } from '../vien-thong.service';

@Component({
  selector: 'ga-bieu-do-tramvt-dvql',
  templateUrl: './bieu-do-tramvt-dvql.component.html',
  styleUrls: ['./bieu-do-tramvt-dvql.component.css']
})
export class BieuDoTramvtDvqlComponent implements OnInit {

  isLoading = false;
  value: ResponseStatistics;
  schemeChart = schemeChart;
  constructor(private service: VienThongService) {}

  ngOnInit() {
    this.service.quanHuyenSelected$.subscribe((value) => {
      this.service
        .getSLTramVienThongTheoDonVi({ maQuanHuyens: value,maPhuongXas:[] })
        .subscribe((value) => (this.value = value));
    });

    this.service.getSLTramVienThongTheoDonVi().subscribe((value) => (this.value = value));
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
