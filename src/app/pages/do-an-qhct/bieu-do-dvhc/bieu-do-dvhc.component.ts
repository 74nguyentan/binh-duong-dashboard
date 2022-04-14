import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnChanges, OnInit } from '@angular/core';
import { ResponseStatistics } from '../../../shared/models/thong-ke/response.model';
import { DoAnQHCTService } from '../do-an-qhct.service';
import { schemeChart } from '../../../shared/models/color.interface';

@Component({
  selector: 'ga-bieu-do-dvhc',
  templateUrl: './bieu-do-dvhc.component.html',
  styleUrls: ['./bieu-do-dvhc.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class BieuDoDvhcComponent implements OnInit, OnChanges {
  isLoading = false;
  value: ResponseStatistics;
  schemeChart = schemeChart;

  constructor(private service: DoAnQHCTService,
    // private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.service.getLoaiDADVHC().subscribe((value) => (this.value = value));
  }

  ngOnChanges(): void {
    // this.cd.detectChanges();
  }

}
