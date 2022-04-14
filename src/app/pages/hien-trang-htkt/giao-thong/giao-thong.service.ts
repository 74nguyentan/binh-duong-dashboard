import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ResponseStatistics } from '../../../shared/models/thong-ke/response.model';
import { FilterHCParams, getParams } from '@shared/models/thong-ke/filter-hc.interface';
import { FilterHCBaseService } from '../shared/filter-hc-base.service';

@Injectable()
export class GiaoThongService extends FilterHCBaseService {
  constructor(private httpClient: HttpClient) {
    super();
  }
  getSoLuong(params?: FilterHCParams) {
    return this.httpClient.get<{
      chieuDai: number;
      dienTich: number;
    }>(environment.apiUrl + '/dashboard/hien-trang-htkt/gt/so-luong',
    {
      params: getParams(params),
    }
    );
  }
  getChieuDaiTheoDVHC() {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + '/dashboard/hien-trang-htkt/gt/chieu-dai-dvhc'
    );
  }
  getDienTichTheoDVHC() {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + '/dashboard/hien-trang-htkt/gt/dien-tich-dvhc'
    );
  }
}
