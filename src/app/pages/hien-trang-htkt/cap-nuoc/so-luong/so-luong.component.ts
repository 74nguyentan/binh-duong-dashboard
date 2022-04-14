import { Component, OnInit } from '@angular/core';
import { CapNuocService } from '../cap-nuoc.service';

@Component({
  selector: 'ga-so-luong',
  templateUrl: './so-luong.component.html',
  styleUrls: ['./so-luong.component.css'],
})
export class SoLuongComponent implements OnInit {
  value: { chieuDaiTuyenOng: number; soLuongNhaMayNuoc: number; congSuatNhaMayNuoc: number ;soLuongKhachHang:number} = {
    chieuDaiTuyenOng: 0,
    soLuongNhaMayNuoc: 0,
    congSuatNhaMayNuoc: 0,
    soLuongKhachHang:0,
  };
  constructor(private service: CapNuocService) {}
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
