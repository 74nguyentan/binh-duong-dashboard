import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseStatistics } from '../../../shared/models/thong-ke/response.model';
import { environment } from '../../../../environments/environment';
import { FilterHCParams, getParams } from '@shared/models/thong-ke/filter-hc.interface';
import { FilterHCBaseService } from '../shared/filter-hc-base.service';

@Injectable()
export class ThoatNuocService extends FilterHCBaseService  {

  constructor(private httpClient: HttpClient) {
    super();
  }
  getSLHoGaTheoDVHC() {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + '/dashboard/hien-trang-htkt/tn/sl-ho-ga-dvhc'
    );
  }
  getSLHoGaTheoLoai(params?: FilterHCParams) {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + '/dashboard/hien-trang-htkt/tn/sl-ho-ga-loai',
      {
        params: getParams(params),
      }
    );
  }
  getSLHoGaTheoDuongKinh(params?: FilterHCParams) {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + '/dashboard/hien-trang-htkt/tn/sl-ho-ga-duong-kinh',
      {
        params: getParams(params),
      }
    );
  }
  getChieuDaiCongThoatNuocTheoDVHC() {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl +
        '/dashboard/hien-trang-htkt/tn/chieu-dai-cong-thoat-nuoc-dvhc'
    );
  }
  getSoLuong(params?: FilterHCParams) {
    return this.httpClient.get<{
      miengXa: number;
      tramXLNT: number;
      csuatTramXLNT: number;
      chieuDaiCTN:number;
    }>(
      environment.apiUrl + '/dashboard/hien-trang-htkt/tn/so-luong',
      {
        params: getParams(params),
      }
    );
  }
}
