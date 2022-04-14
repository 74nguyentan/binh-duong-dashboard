import { Component, OnInit } from '@angular/core';
import { schemeChart } from '../../../../shared/models/color.interface';
import { ResponseStatistics } from '../../../../shared/models/thong-ke/response.model';
import { CapNuocService } from '../cap-nuoc.service';

@Component({
  selector: 'ga-bieu-do-van-loai-van',
  templateUrl: './bieu-do-van-loai-van.component.html',
  styleUrls: ['./bieu-do-van-loai-van.component.css'],
})
export class BieuDoVanLoaiVanComponent implements OnInit {
  isLoading = false;
  value: ResponseStatistics;
  schemeChart = schemeChart;
  constructor(private service: CapNuocService) {}

  ngOnInit() {
    this.service.getSLVanTheoLoai().subscribe((value) => {
      value.datas.map((item) => {
        if (item.name == null) {
          item.name = 'Khác';
        }
        if (item.title == null) {
          item.title = 'Khác';
        }
        return item;
      });
      this.value = value;
    });
  }
}
