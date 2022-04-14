import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ResponseStatistics } from '../../../shared/models/thong-ke/response.model';
import { FilterHCParams, getParams } from '@shared/models/thong-ke/filter-hc.interface';
import { FilterHCBaseService } from '../shared/filter-hc-base.service';

@Injectable()
export class MoiTruongDoThiService extends FilterHCBaseService  {
  constructor(private httpClient: HttpClient) { 
    super();
  }

  getSoLuong(params?: FilterHCParams) {
    return this.httpClient.get<{
      dienTichCongVien: number;
      khuXuLyRacThai: number;
      tramTrungChuyenCTR: number;
    }>(
      environment.apiUrl + '/dashboard/hien-trang-htkt/mtdt/so-luong',
      {
        params: getParams(params),
      }
    );
  }
  getSoLuongDVHC() {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + '/dashboard/hien-trang-htkt/mtdt/nghia-trang-dvhc'
    );
  }
  getSoLuongLnt(params?: FilterHCParams) {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + '/dashboard/hien-trang-htkt/mtdt/nghia-trang-lnt',
      {
        params: getParams(params),
      }
    );
  }
}
