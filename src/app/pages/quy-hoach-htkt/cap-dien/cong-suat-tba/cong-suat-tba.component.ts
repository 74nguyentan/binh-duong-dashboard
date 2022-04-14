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
    this.service.namSelected$.subscribe((nams) => {
      console.log("so luong nam async")
      let namString = "";
      if (nams.length > 0) namString = "?";
      nams.forEach((f) => {
        namString += `nam=${f}&`;
      });
      namString = namString.slice(0,namString.length-1)
     this.loadData(namString)
    });
    this.loadData('');
    
  }
  private loadData(nam: string){
    this.service.getCongSuatTramBienApDVHC(nam).subscribe((value) => (this.value = value));
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
