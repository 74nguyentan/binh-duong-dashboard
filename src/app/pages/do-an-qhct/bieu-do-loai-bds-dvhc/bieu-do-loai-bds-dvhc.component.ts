import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ResponseStatistics } from '../../../shared/models/thong-ke/response.model';
import { DoAnQHCTService } from '../do-an-qhct.service';
import { schemeChart } from '../../../shared/models/color.interface';
import { ChartMultiple } from '../../../shared/models/thong-ke/chart-response.model';
import { BarVerticalStackedComponent } from '@swimlane/ngx-charts';

@Component({
  selector: 'ga-bieu-do-loai-bds-dvhc',
  templateUrl: './bieu-do-loai-bds-dvhc.component.html',
  styleUrls: ['./bieu-do-loai-bds-dvhc.component.css'],
})
export class BieuDoLoaiBdsDvhcComponent implements OnInit,AfterViewInit {
  @ViewChild(BarVerticalStackedComponent) chart:BarVerticalStackedComponent;
  isLoading = false;
  value: ResponseStatistics;
  schemeChart = schemeChart;
  constructor(
    private service: DoAnQHCTService,
    private ref: ElementRef<HTMLDivElement>
  ) {}

  ngOnInit() {
   
  }

  ngAfterViewInit(){
    this.service.getLoaiDABDSDVHC().subscribe((value) => {
      const data: ChartMultiple = {
        name: '',
        value: 0,
        title: '',
        series: [
          { name: 'Công vụ', title: 'NO-CONGVU', value: 0 },
          { name: 'Tái định cư', title: 'NO-TAIDINHCU', value: 0 },
          { name: 'Thương mại', title: 'NO-THUONGMAI', value: 0 },
          { name: 'Xã hội', title: 'NO-XAHOI', value: 0 },
        ],
      };
      value.datas.unshift(data);
      this.value = value;
this.chart.update()
    });
  }
}
