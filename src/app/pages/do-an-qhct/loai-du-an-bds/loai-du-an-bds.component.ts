import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ResponseStatistics } from '../../../shared/models/thong-ke/response.model';
import { DoAnQHCTService } from '../do-an-qhct.service';
import { schemeChart } from '../../../shared/models/color.interface';

@Component({
  selector: 'ga-loai-du-an-bds',
  templateUrl: './loai-du-an-bds.component.html',
  styleUrls: ['./loai-du-an-bds.component.css'],
})
export class LoaiDuAnBdsComponent implements OnInit {
  isLoading = false;
  value: ResponseStatistics;
  schemeChart = schemeChart;
  constructor(private service: DoAnQHCTService) { }

  ngOnInit() {
    this.service.getLoaiDuAnBDS().subscribe((value) => {
      this.value = value;
    });
  }

}
