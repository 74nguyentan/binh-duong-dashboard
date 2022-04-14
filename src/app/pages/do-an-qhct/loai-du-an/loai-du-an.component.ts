import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
} from '@angular/core';
import { DoAnQHCTService } from '../do-an-qhct.service';
import { ResponseStatistics } from '../../../shared/models/thong-ke/response.model';
import {
  ChartColorEnum,
  schemeChart,
} from '../../../shared/models/color.interface';
import { sortBy } from 'lodash';

@Component({
  selector: 'ga-loai-du-an',
  templateUrl: './loai-du-an.component.html',
  styleUrls: ['./loai-du-an.component.css'],
})
export class LoaiDuAnComponent implements OnInit {
  count = 0;
  isLoading = false;
  value: ResponseStatistics;
  schemeChart = schemeChart;

  constructor(private service: DoAnQHCTService) { }

  ngOnInit() {
    this.service.getLoaiDuAn().subscribe((value) => {
      value.datas = sortBy(value.datas, (e) => e.name);
      value.datas.forEach((val) => {
        val.name = val.name + ': ' + val.value;
      });
      this.value = value;
    });
  }

  customColors() {
    if (this.value.datas.length) {
      const data = this.value.datas.find((f) => f.name === 'BDS');
      if (data) {
        return ChartColorEnum.KHAC;
      }
    }
    return '';
  }
}
