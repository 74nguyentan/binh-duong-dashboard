import { Component, OnInit, Input, AfterViewInit, AfterViewChecked } from '@angular/core';
import { ResponseStatistics } from '../../../shared/models/thong-ke/response.model';
import { QuyHoachSuDungDatService } from '../quy-hoach-su-dung-dat.service';
import { Subscription } from 'rxjs';
import { fill, concat } from 'lodash';
import {
  ChartMultiple,
} from '../../../shared/models/thong-ke/chart-response.model';
import { schemeChart } from '../../../shared/models/color.interface';

@Component({
  selector: 'ga-bieu-do-dvhc',
  templateUrl: './bieu-do-dvhc.component.html',
  styleUrls: ['./bieu-do-dvhc.component.css'],
    // changeDetection: ChangeDetectionStrategy.OnPush

})
export class BieuDoDvhcComponent implements OnInit {
  view: any[] = [750, 420];
  isLoading = false;
  value: ResponseStatistics;
  schemeChart = schemeChart;
  private sub: Subscription;
  private lqh: string;
  private mdsdd: string[];
  private quanHuyens: string[];
  constructor(
    private service: QuyHoachSuDungDatService,
        // private cd: ChangeDetectorRef

    ) { }

  async ngOnInit() {
    this.service.mdSDDSelected$.subscribe((pMdsdd) => {
      this.mdsdd = pMdsdd;
      this.loadData();
    });
    this.service.loaiQuyHoachSelected$.subscribe((pLqh) => {
      this.lqh = pLqh;
      this.loadData();
    });
    this.service.quanHuyenSelected$.subscribe((pQuanHuyens) => {
      this.quanHuyens = pQuanHuyens;
      this.loadData();
    });

        // this.cd.detectChanges();

  }
  private loadData() {
    this.sub && this.sub.unsubscribe();
    this.sub = this.service
      .getSDDDVHC({
        lqh: this.lqh,
        mdsdd: this.mdsdd,
        quanHuyens: this.quanHuyens,
      })
      .subscribe((value) => {
        this.sub = null;
        this.value = value;
      }
      );
  }
  checkLengthChart(): boolean {
    if (this.value && this.value.datas.length <= 2) {
      return true;
    }
    return false;
  }
  xAxisTickFormatting = (val: string) => {
    if (this.value.datas.length) {
      const data = this.value.datas.find((f) => f.name === val);
      if (data) {
        return data.title;
      }
    }
    return '';
  }
}
