import { Component, OnInit } from '@angular/core';
import { schemeChart } from '@shared/models/color.interface';
import { ResponseStatistics } from '@shared/models/thong-ke/response.model';
import { DoAnQHCTService } from '../do-an-qhct.service';

@Component({
  selector: 'ga-bieu-do-mdsdd-tda',
  templateUrl: './bieu-do-mdsdd-tda.component.html',
  styleUrls: ['./bieu-do-mdsdd-tda.component.css']
})
export class BieuDoMdsddTdaComponent implements OnInit {
  view: any[] = [255, 255];
  count = 0;
  isLoading = false;
  value: ResponseStatistics;
  schemeChart = schemeChart;

  constructor(private service: DoAnQHCTService) { }

  ngOnInit() {
  }
  getDataChart(e: string) {
    this.service.getMucDichSddTDA(e).subscribe((value) => {
      this.value = value;
      value.datas.forEach(val => {
        val.name = val.name + ': ' + val.value + '%';
      });
    });
  }

  labelFormating = (val) => {
    if (this.value.datas.length) {
      const data = this.value.datas.find((f) => f.name === val);
      if (data) {
        return data.title;
      }
    }
    return '';
  }
}
