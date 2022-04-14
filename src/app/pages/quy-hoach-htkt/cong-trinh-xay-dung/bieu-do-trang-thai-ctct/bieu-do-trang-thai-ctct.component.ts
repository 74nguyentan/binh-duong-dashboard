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
      this.loadData('');
    });
    this.service.phuongXaSelected$.subscribe((value) => {
      this.maPhuongXas = value;
      this.loadData('');
    });
    this.service.namSelected$.subscribe((nams) => {
      let namString = "";
      if (nams.length > 0) namString = "?";
      nams.forEach((f) => {
        namString += `nam=${f}&`;
      });
      namString = namString.slice(0, namString.length - 1);
      this.loadData(namString);
    });
    this.loadData("");
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

  private loadData(nam: string) {
    this.service
      .getTinhTrangCTCT(nam,{ maQuanHuyens: this.maQuanHuyens, maPhuongXas: this.maPhuongXas })
      .subscribe((value) => (this.value = value));
  }
}
