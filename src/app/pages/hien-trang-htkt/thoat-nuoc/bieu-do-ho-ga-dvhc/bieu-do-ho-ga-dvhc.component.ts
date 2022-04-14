import { Component, OnInit } from '@angular/core';
import { schemeChart } from '@shared/models/color.interface';
import { ResponseStatistics } from '@shared/models/thong-ke/response.model';
import { ThoatNuocService } from '../thoat-nuoc.service';

@Component({
  selector: 'ga-bieu-do-ho-ga-dvhc',
  templateUrl: './bieu-do-ho-ga-dvhc.component.html',
  styleUrls: ['./bieu-do-ho-ga-dvhc.component.css']
})
export class BieuDoHoGaDvhcComponent implements OnInit {

  isLoading = false;
  value: ResponseStatistics;
  schemeChart = schemeChart;
  constructor(private service: ThoatNuocService) {}

  ngOnInit() {
    this.service.getSLHoGaTheoDVHC().subscribe((value) => (this.value = value));
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
