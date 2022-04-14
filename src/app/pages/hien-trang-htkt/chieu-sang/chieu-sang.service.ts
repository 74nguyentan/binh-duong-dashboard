import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ResponseStatistics } from '../../../shared/models/thong-ke/response.model';
import { FilterHCParams, getParams } from '@shared/models/thong-ke/filter-hc.interface';
import { FilterHCBaseService } from '../shared/filter-hc-base.service';

@Injectable()
export class ChieuSangService extends FilterHCBaseService {
  constructor(private httpClient: HttpClient) {
    super();

  }

  getSoLuong(params?: FilterHCParams) {
    return this.httpClient.get<{
      den: number;
      tiepDia: number;
      chieuDaiTuyenDayChieuSang: number;
    }>(environment.apiUrl + '/dashboard/hien-trang-htkt/cs/so-luong',
    {
      params: getParams(params),
    }
    );
  }
  getChieuDaiTuyenDayCSTheoDVHC() {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + '/dashboard/hien-trang-htkt/cs/chieu-dai-dvhc'
    );
  }
}
