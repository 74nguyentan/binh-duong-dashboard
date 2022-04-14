import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseStatistics } from '../../../shared/models/thong-ke/response.model';
import { environment } from '../../../../environments/environment';
import {
  FilterHCParams,
  getParams,
} from '@shared/models/thong-ke/filter-hc.interface';
import { FilterHCBaseService } from '../shared/filter-hc-base.service';

@Injectable()
export class CongTrinhXayDungService extends FilterHCBaseService {
  constructor(private httpClient: HttpClient) {
    super();
  }
  getSoLuong(params?: FilterHCParams) {
    return this.httpClient.get<any>(
      environment.apiUrl + '/dashboard/hien-trang-htkt/ctxd/so-luong',
      {
        params: getParams(params),
      }
    );
  }
  getLoaiCTDVHC() {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + '/dashboard/hien-trang-htkt/ctxd/loai-ctd-dvhc'
    );
  }

  getPhanLoaiCTXD(params?: FilterHCParams) {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + '/dashboard/hien-trang-htkt/ctxd/loai-ctxd',
      {
        params: getParams(params),
      }
    );
  }
  getTinhTrangCTCT(params?: FilterHCParams) {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + '/dashboard/hien-trang-htkt/ctxd/tinh-trang-ctct',
      {
        params: getParams(params),
      }
    );
  }
}
