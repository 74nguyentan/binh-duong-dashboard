import { Component, OnInit } from '@angular/core';
import { CapDienService } from '../cap-dien.service';

@Component({
  selector: 'ga-so-luong',
  templateUrl: './so-luong.component.html',
  styleUrls: ['./so-luong.component.css'],
})
export class SoLuongComponent implements OnInit {
  value: {
    chieuDaiTuyenDay: number;
    soLuongCotDien: number;
    soLuongDenGiaoThong: number;
    soLuongTramBienAp: number;
  } = {
    chieuDaiTuyenDay: 0,
    soLuongCotDien: 0,
    soLuongDenGiaoThong: 0,
    soLuongTramBienAp: 0,
  };
  constructor(private service: CapDienService) {}
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
