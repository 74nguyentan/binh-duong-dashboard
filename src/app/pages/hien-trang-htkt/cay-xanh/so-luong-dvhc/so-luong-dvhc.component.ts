import { Component, OnInit } from '@angular/core';
import { schemeChart } from '../../../../shared/models/color.interface';
import { ResponseStatistics } from '../../../../shared/models/thong-ke/response.model';
import { CayXanhService } from '../cay-xanh.service';

@Component({
  selector: 'ga-so-luong-dvhc',
  templateUrl: './so-luong-dvhc.component.html',
  styleUrls: ['./so-luong-dvhc.component.css']
})
export class SoLuongDvhcComponent implements OnInit {
  isLoading = false;
  value: ResponseStatistics;
  schemeChart = schemeChart;
  constructor(private service: CayXanhService) {}

  ngOnInit() {
    this.service.getSoLuongDVHC().subscribe((value) => (this.value = value));
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
