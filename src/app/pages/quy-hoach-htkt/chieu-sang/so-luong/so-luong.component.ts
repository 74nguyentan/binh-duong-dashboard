import { Component, OnInit } from "@angular/core";
import { ChieuSangService } from "../chieu-sang.service";

@Component({
  selector: "ga-so-luong",
  templateUrl: "./so-luong.component.html",
  styleUrls: ["./so-luong.component.css"],
})
export class SoLuongComponent implements OnInit {
  value: { den: number; tiepDia: number; chieuDaiTuyenDayChieuSang: number } = {
    den: 0,
    tiepDia: 0,
    chieuDaiTuyenDayChieuSang: 0,
  };
  private maQuanHuyens: string[];
  private maPhuongXas: string[];
  constructor(private service: ChieuSangService) {}

  ngOnInit() {
    this.service.quanHuyenSelected$.subscribe((value) => {
      this.maQuanHuyens = value;
      this.loadData("");
    });
    this.service.phuongXaSelected$.subscribe((value) => {
      this.maPhuongXas = value;
      this.loadData("");
    });
    this.service.namSelected$.subscribe((nams) => {
      let namString = "";
      if (nams.length > 0) namString = "?";
      nams.forEach((f) => {
        namString += `nam=${f}&`;
      });
      namString = namString.slice(0, namString.length - 1);
      this.loadData(namString);
    });
    this.loadData("");
  }

  private loadData(nam: string) {
    this.service
      .getSoLuong(nam, {
        maPhuongXas: this.maPhuongXas,
        maQuanHuyens: this.maQuanHuyens,
      })
      .subscribe((value) => (this.value = value));
  }
}
