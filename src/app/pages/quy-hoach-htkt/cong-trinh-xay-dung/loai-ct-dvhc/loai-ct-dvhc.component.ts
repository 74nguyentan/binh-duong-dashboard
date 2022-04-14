import { Component, OnInit } from '@angular/core';
import { CongTrinhXayDungService } from '../cong-trinh-xay-dung.service';
import { ResponseStatistics } from '../../../../shared/models/thong-ke/response.model';
import { schemeChart } from '../../../../shared/models/color.interface';

@Component({
  selector: 'ga-loai-ct-dvhc',
  templateUrl: './loai-ct-dvhc.component.html',
  styleUrls: ['./loai-ct-dvhc.component.css']
})
export class LoaiCtDvhcComponent implements OnInit {
  isLoading = false;
  value: ResponseStatistics;
  schemeChart = schemeChart;
  constructor(private service: CongTrinhXayDungService) {}

  ngOnInit() {this.service.namSelected$.subscribe((nams) => {
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
  private loadData(nam: string){
    this.service.getLoaiCTDVHC(nam).subscribe((value) => (this.value = value));
  }

  yAxisTickFormatting = (val) => {
    if (this.value.datas.length) {
      const data = this.value.datas.find((f) => f.name === val);
      if (data) {
        return data.title;
      }
    }
    return '';
  };

}
