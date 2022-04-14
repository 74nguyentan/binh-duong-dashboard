import { Component, OnInit } from '@angular/core';
import { ResponseStatistics } from '@shared/models/thong-ke/response.model';
import { DoAnQHCTService } from '../do-an-qhct.service';
import { schemeChart } from '@shared/models/color.interface';
import { ChartMultiple } from '../../../shared/models/thong-ke/chart-response.model';

@Component({
  selector: 'ga-bieu-do-tien-do-bds',
  templateUrl: './bieu-do-tien-do-bds.component.html',
  styleUrls: ['./bieu-do-tien-do-bds.component.css'],
})
export class BieuDoTienDoBdsComponent implements OnInit {
  schemeChart = schemeChart;
  isLoading = false;
  value: ResponseStatistics;
  constructor(private service: DoAnQHCTService) {}

  ngOnInit() {
    this.service.getTienDoBDS().subscribe((value) => {
      const data: ChartMultiple = {
        name: '',
        title: '',
        value:0,
        series: [
          { name: 'Công vụ', title: 'NO-CONGVU', value: 0 },
          { name: 'Tái định cư', title: 'NO-TAIDINHCU', value: 0 },
          { name: 'Thương mại', title: 'NO-THUONGMAI', value: 0 },
          { name: 'Xã hội', title: 'NO-XAHOI', value: 0 },
        ],
      };
      value.datas.unshift(data);
      this.value = value;
    });
  }
}
