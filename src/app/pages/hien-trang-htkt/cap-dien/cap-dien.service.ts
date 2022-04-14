import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseStatistics } from '../../../shared/models/thong-ke/response.model';
import { environment } from '../../../../environments/environment';
import { FilterHCParams, getParams } from '@shared/models/thong-ke/filter-hc.interface';
import { FilterHCBaseService } from '../shared/filter-hc-base.service';

@Injectable()
export class CapDienService extends FilterHCBaseService {
  constructor(private httpClient: HttpClient) {
    super();
  }
  getSoLuong(params?: FilterHCParams) {
    return this.httpClient.get<{
      chieuDaiTuyenDay: number;
      soLuongCotDien: number;
      soLuongDenGiaoThong: number;
      soLuongTramBienAp: number;
    }>(environment.apiUrl + '/dashboard/hien-trang-htkt/cd/so-luong',
    {
      params: getParams(params),
    }
    );
  }
  getSoLuongTheoDVHC() {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + '/dashboard/hien-trang-htkt/cd/so-luong-dvhc'
    );
  }
  getChieuDaiTheoDienAp(params?: FilterHCParams) {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + '/dashboard/hien-trang-htkt/cd/chieu-dai-dien-ap',
      {
        params: getParams(params),
      }
    );
  }
  getCongSuatTramBienApDVHC() {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + '/dashboard/hien-trang-htkt/cd/csuat-tba-dvhc'
    );
  }

  geChieuDaiTuyenDayChieuSangDVHC(){
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + '/dashboard/hien-trang-htkt/cd/chieu-dai-tdcs-dvhc'
    );
  }
}

