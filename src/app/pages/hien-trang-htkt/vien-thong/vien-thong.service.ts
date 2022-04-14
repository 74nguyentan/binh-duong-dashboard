import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseStatistics } from '../../../shared/models/thong-ke/response.model';
import { environment } from '../../../../environments/environment';
import { FilterHCParams, getParams } from '@shared/models/thong-ke/filter-hc.interface';
import { FilterHCBaseService } from '../shared/filter-hc-base.service';

@Injectable()
export class VienThongService extends FilterHCBaseService {
  constructor(private httpClient: HttpClient) {
    super();
  }
  getSLTramVienThongTheoDVHC() {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + '/dashboard/hien-trang-htkt/vt/sl-tramvt-dvhc'
    );
  }
  getSLTramVienThongTheoDonVi(params?: FilterHCParams){
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + '/dashboard/hien-trang-htkt/vt/sl-tramvt-donvi',
      {
        params: getParams(params),
      }
    );
  }
 
  getChieuDaiTuyenCapTruyenDanTheoDVHC() {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + '/dashboard/hien-trang-htkt/vt/chieu-dai-captd-dvhc'
    );
  }
  getSoLuong(params?: FilterHCParams) {
    return this.httpClient.get<{
      buuCuc: number;
      hoGaCap: number;
      tramVienThong: number;
      chieuDaiTuyenCapTruyenDan:number;
    }>(environment.apiUrl + '/dashboard/hien-trang-htkt/vt/so-luong',
    {
      params: getParams(params),
    }
    );
  }
}
