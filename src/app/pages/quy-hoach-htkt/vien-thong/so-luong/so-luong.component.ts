import { Component, OnInit } from '@angular/core';
import { VienThongService } from '../vien-thong.service';

@Component({
  selector: 'ga-so-luong',
  templateUrl: './so-luong.component.html',
  styleUrls: ['./so-luong.component.css'],
})
export class SoLuongComponent implements OnInit {
  value: { buuCuc: number; hoGaCap: number; tramVienThong: number; chieuDaiTuyenCapTruyenDan:number; } = {
    buuCuc: 0,
    hoGaCap: 0,
    tramVienThong: 0,
    chieuDaiTuyenCapTruyenDan:0,
  };
  constructor(private service: VienThongService) {}

  private maQuanHuyens: string[];
  private maPhuongXas: string[];

  ngOnInit() {
    this.service.quanHuyenSelected$.subscribe((value) => {
      this.maQuanHuyens = value;
      this.loadData('');
    });
    this.service.phuongXaSelected$.subscribe((value) => {
      this.maPhuongXas = value;
      this.loadData('');
    });
    this.service.namSelected$.subscribe((nams) => {
      let namString = "";
      if (nams.length > 0) namString = "?";
      nams.forEach((f) => {
        namString += `nam=${f}&`;
      });
      namString = namString.slice(0,namString.length-1)
      this.loadData(namString)
    });
    this.loadData('')
  }


  private loadData(nam: string) {
    this.service
      .getSoLuong(nam,{
        maPhuongXas: this.maPhuongXas,
        maQuanHuyens: this.maQuanHuyens,
      })
      .subscribe((value) => (this.value = value));
  }
}
