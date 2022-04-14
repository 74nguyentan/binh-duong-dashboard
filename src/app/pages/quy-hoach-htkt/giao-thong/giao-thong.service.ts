import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ResponseStatistics } from '../../../shared/models/thong-ke/response.model';
import { FilterHCParams, getParams } from '@shared/models/thong-ke/filter-hc.interface';
import { FilterHCBaseService } from '../shared/filter-hc-base.service';
import { String } from 'lodash';

@Injectable()
export class GiaoThongService extends FilterHCBaseService {
  constructor(private httpClient: HttpClient) {
    super();
  }
  getSoLuong( nam: string, params?: FilterHCParams) {
    return this.httpClient.get<{
      chieuDai: number;
      dienTich: number;
    }>(environment.apiUrl + '/dashboard/qhct-htkt/gt/so-luong' + nam,
    {
      params: getParams(params),
    }
    );
  }
  getChieuDaiTheoDVHC(nam: string) {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + '/dashboard/qhct-htkt/gt/chieu-dai-dvhc' + nam
    );
  }
  getDienTichTheoDVHC(nam: string) {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + '/dashboard/qhct-htkt/gt/dien-tich-dvhc'+ nam
    );
  }
}
