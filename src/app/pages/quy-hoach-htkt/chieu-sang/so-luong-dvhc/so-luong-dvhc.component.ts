import { Component, OnInit } from '@angular/core';
import { schemeChart } from '../../../../shared/models/color.interface';
import { ResponseStatistics } from '../../../../shared/models/thong-ke/response.model';
import { ChieuSangService } from '../chieu-sang.service';

@Component({
  selector: 'ga-so-luong-dvhc',
  templateUrl: './so-luong-dvhc.component.html',
  styleUrls: ['./so-luong-dvhc.component.css'],
})
export class SoLuongDvhcComponent implements OnInit {
  isLoading = false;
  value: ResponseStatistics;
  schemeChart = schemeChart;
  constructor(private service: ChieuSangService) {}

  ngOnInit() {
    this.service.namSelected$.subscribe((nams) => {
      let namString = "";
      if (nams.length > 0) namString = "?";
      nams.forEach((f) => {
        namString += `nam=${f}&`;
      });
      namString = namString.slice(0,namString.length-1)
      this.loadData(namString)
    });
    this.loadData('')
  
  }
private loadData(nam: string){
  this.service.getChieuDaiTuyenDayCSTheoDVHC(nam).subscribe((value) => (this.value = value));
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
