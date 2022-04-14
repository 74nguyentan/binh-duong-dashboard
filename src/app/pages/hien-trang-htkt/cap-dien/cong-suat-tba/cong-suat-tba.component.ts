import { Component, OnInit } from '@angular/core';
import { schemeChart } from '../../../../shared/models/color.interface';
import { ResponseStatistics } from '../../../../shared/models/thong-ke/response.model';
import { CapDienService } from '../cap-dien.service';

@Component({
  selector: 'ga-cong-suat-tba',
  templateUrl: './cong-suat-tba.component.html',
  styleUrls: ['./cong-suat-tba.component.css']
})
export class CongSuatTbaComponent implements OnInit {
  isLoading = false;
  value: ResponseStatistics;
  schemeChart = schemeChart;
  constructor(private service: CapDienService) {}

  ngOnInit() {
    this.service.getCongSuatTramBienApDVHC().subscribe((value) => (this.value = value));
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
