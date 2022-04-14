import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { QuanHuyenEntity } from '../models/quan-huyen.model';

@Injectable({ providedIn: 'root' })
export class DashboardService {
  private quanHuyenSelectedSource = new BehaviorSubject<QuanHuyenEntity[]>([]);
  lstQuanHuyenSelected$ = this.quanHuyenSelectedSource.asObservable();

  changeQuanHuyen(val: QuanHuyenEntity[]) {
    this.quanHuyenSelectedSource.next(val);
  }
}
