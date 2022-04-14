import { Component, OnInit } from '@angular/core';
import { schemeChart } from '../../../../shared/models/color.interface';
import { ResponseStatistics } from '../../../../shared/models/thong-ke/response.model';
import { CapNuocService } from '../cap-nuoc.service';

@Component({
  selector: 'ga-bieu-do-dhkh-co-dong-ho',
  templateUrl: './bieu-do-dhkh-co-dong-ho.component.html',
  styleUrls: ['./bieu-do-dhkh-co-dong-ho.component.css'],
})
export class BieuDoDHKHTheoCoDongHoComponent implements OnInit {
  isLoading = false;
  value: ResponseStatistics;
  schemeChart = schemeChart;
  constructor(private service: CapNuocService) {}

  ngOnInit() {
    this.service.getSLDHKHTheoCoDongHo().subscribe((value) => {
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

  labelFormating = (val: string) => {
    console.log(val);
    console.log(this.value);

    if (val) {
      const label = val.split(' - ')[0];
      return label;
    }
    return '';
  };
}
