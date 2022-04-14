import { Component, OnInit } from '@angular/core';
import { ResponseStatistics } from '../../../../shared/models/thong-ke/response.model';
import { schemeChart } from '../../../../shared/models/color.interface';
import { CongTrinhXayDungService } from '../cong-trinh-xay-dung.service';

@Component({
  selector: 'ga-bieu-do-trang-thai-ctct',
  templateUrl: './bieu-do-trang-thai-ctct.component.html',
  styleUrls: ['./bieu-do-trang-thai-ctct.component.css'],
})
export class BieuDoTrangThaiCtctComponent implements OnInit {
  isLoading = false;
  value: ResponseStatistics;
  schemeChart = schemeChart;
  private maQuanHuyens:string[];
  private maPhuongXas:string[];
  constructor(private service: CongTrinhXayDungService) {}

  ngOnInit() {
    this.service.quanHuyenSelected$.subscribe((value) => {
      this.maQuanHuyens = value;
      this.loadData();
    });
    this.service.phuongXaSelected$.subscribe((value) => {
      this.maPhuongXas = value;
      this.loadData();
    });
    this.loadData();
  }

  labelFormating = (val) => {
    if (this.value.datas.length) {
      const data = this.value.datas.find((f) => f.name === val);
      if (data) {
        return data.name;
      }
    }
    return '';
  };

  private loadData() {
    this.service
      .getTinhTrangCTCT({ maQuanHuyens: this.maQuanHuyens, maPhuongXas: this.maPhuongXas })
      .subscribe((value) => (this.value = value));
  }
}
