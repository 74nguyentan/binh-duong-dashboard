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
  getSoLuong(nam: string,params?: FilterHCParams) {
    return this.httpClient.get<{
      chieuDaiTuyenDay: number;
      soLuongCotDien: number;
      soLuongDenGiaoThong: number;
      soLuongTramBienAp: number;
    }>(environment.apiUrl + '/dashboard/qhct-htkt/cd/so-luong' + nam,
    {
      params: getParams(params),
    }
    );
  }
  getSoLuongTheoDVHC(nam: string) {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + '/dashboard/qhct-htkt/cd/so-luong-dvhc' + nam
    );
  }
  getChieuDaiTheoDienAp(nam: string, params?: FilterHCParams) {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + '/dashboard/qhct-htkt/cd/chieu-dai-dien-ap' + nam,
      {
        params: getParams(params),
      }
    );
  }
  getCongSuatTramBienApDVHC(nam: string) {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + '/dashboard/qhct-htkt/cd/csuat-tba-dvhc'+ nam
    );
  }

  getChieuDaiTuyenDayChieuSangDVHC(nam: string){
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + '/dashboard/qhct-htkt/cd/chieu-dai-tdcs-dvhc'+ nam
    );
  }
}

