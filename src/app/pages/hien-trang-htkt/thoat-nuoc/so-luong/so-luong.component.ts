import { Component, OnInit } from '@angular/core';
import { ThoatNuocService } from '../thoat-nuoc.service';

@Component({
  selector: 'ga-so-luong',
  templateUrl: './so-luong.component.html',
  styleUrls: ['./so-luong.component.css'],
})
export class SoLuongComponent implements OnInit {
  value: { miengXa: number; tramXLNT: number; csuatTramXLNT: number ;chieuDaiCTN:number} = {
    miengXa: 0,
    tramXLNT: 0,
    csuatTramXLNT: 0,
    chieuDaiCTN:0,
  };
  constructor(private service: ThoatNuocService) {}

  private maQuanHuyens: string[];
  private maPhuongXas: string[];

  ngOnInit() {
    this.service.quanHuyenSelected$.subscribe((value) => {
      this.maQuanHuyens = value;
      this.loadData();
    });
    this.service.phuongXaSelected$.subscribe((value) => {
      this.maPhuongXas = value;
      this.loadData();
    });
    this.loadData();
  }


  private loadData() {
    this.service
      .getSoLuong({
        maPhuongXas: this.maPhuongXas,
        maQuanHuyens: this.maQuanHuyens,
      })
      .subscribe((value) => (this.value = value));
  }
}
