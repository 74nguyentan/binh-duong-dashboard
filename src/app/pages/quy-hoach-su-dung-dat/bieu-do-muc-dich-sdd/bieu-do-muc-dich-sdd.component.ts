import { Component, OnInit, Input } from '@angular/core';
import { ResponseStatistics } from '../../../shared/models/thong-ke/response.model';
import { QuyHoachSuDungDatService } from '../quy-hoach-su-dung-dat.service';
import { Subscription } from 'rxjs';
import { schemeChart } from '../../../shared/models/color.interface';

@Component({
  selector: 'ga-bieu-do-muc-dich-sdd',
  templateUrl: './bieu-do-muc-dich-sdd.component.html',
  styleUrls: ['./bieu-do-muc-dich-sdd.component.css'],
})
export class BieuDoMucDichSddComponent implements OnInit {
  isLoading = false;
  value: ResponseStatistics;
  schemeChart = schemeChart;
  private sub: Subscription;
  private lqh: string;
  private mdsdd: string[];
  private quanHuyens: string[];
  constructor(private service: QuyHoachSuDungDatService) { }

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
  }

  private loadData() {
    this.sub && this.sub.unsubscribe();
    this.sub = this.service
      .getMucDichSDD({
        lqh: this.lqh,
        mdsdd: this.mdsdd,
        quanHuyens: this.quanHuyens,
      })
      .subscribe((value) => {
        this.sub = null;
        this.value = value;
      });
  }

  yAxisTickFormatting = (val) => {
    if (this.value.datas.length) {
      const data = this.value.datas.find((f) => f.name === val);
      if (data) {
        return data.title;
      }
    }
    return '';
  }
}
