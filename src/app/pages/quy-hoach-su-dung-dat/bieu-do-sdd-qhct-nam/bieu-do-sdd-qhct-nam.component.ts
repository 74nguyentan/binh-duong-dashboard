import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { ResponseStatistics } from '../../../shared/models/thong-ke/response.model';
import { QuyHoachSuDungDatService } from '../quy-hoach-su-dung-dat.service';
import { takeWhile } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { schemeChart } from '../../../shared/models/color.interface';

@Component({
  selector: 'ga-bieu-do-sdd-qhct-nam',
  templateUrl: './bieu-do-sdd-qhct-nam.component.html',
  styleUrls: ['./bieu-do-sdd-qhct-nam.component.css'],
})
export class BieuDoSddQhctNamComponent implements OnInit {
  isLoading = false;
  value: ResponseStatistics;
  schemeChart = schemeChart;
  size: number = window.innerWidth;
  view = [];
  private sub: Subscription;
  private mdsdd: string[];
  private quanHuyens: string[];
  constructor(private service: QuyHoachSuDungDatService) {
  }


  async ngOnInit() {
    this.service.mdSDDSelected$.subscribe((pMdsdd) => {
      this.mdsdd = pMdsdd;
      this.loadData();
    });
    this.service.quanHuyenSelected$.subscribe((pQuanHuyens) => {
      this.quanHuyens = pQuanHuyens;
      this.loadData();
    });

  }

  private loadData() {
    this.sub && this.sub.unsubscribe();
    this.sub = this.service
      .getQhctSddNam({
        mdsdd: this.mdsdd,
        quanHuyens: this.quanHuyens,
      })
      .subscribe((value) => {
        this.sub = null;
        this.value = value;
      });
  }
  xAxisTickFormatting = (val) => {
    if (this.value.datas.length) {
      const data = this.value.datas.find((f) => f.name === val);
      if (data) {
        return data.title;
      }
    }
    return '';
  }
}
