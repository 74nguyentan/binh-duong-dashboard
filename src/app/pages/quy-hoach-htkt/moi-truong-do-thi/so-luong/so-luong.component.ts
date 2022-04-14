import { Component, OnInit } from '@angular/core';
import { MoiTruongDoThiService } from '../moi-truong-do-thi.service';

@Component({
  selector: 'ga-so-luong',
  templateUrl: './so-luong.component.html',
  styleUrls: ['./so-luong.component.css'],
})
export class SoLuongComponent implements OnInit {
  value: {
    dienTichCongVien: number;
    khuXuLyRacThai: number;
    tramTrungChuyenCTR: number;
  } = {
      dienTichCongVien: 0,
      khuXuLyRacThai: 0,
      tramTrungChuyenCTR: 0
    };
  constructor(private service: MoiTruongDoThiService) { }

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
      console.log("so luong nam async")
      let namString = "";
      if (nams.length > 0) namString = "?";
      nams.forEach((f) => {
        namString += `nam=${f}&`;
      });
      namString = namString.slice(0,namString.length-1)
     this.loadData(namString)
    });
    this.loadData('');
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
