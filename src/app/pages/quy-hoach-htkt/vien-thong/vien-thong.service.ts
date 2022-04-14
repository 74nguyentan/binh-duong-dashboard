import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ResponseStatistics } from "../../../shared/models/thong-ke/response.model";
import { environment } from "../../../../environments/environment";
import {
  FilterHCParams,
  getParams,
} from "@shared/models/thong-ke/filter-hc.interface";
import { FilterHCBaseService } from "../shared/filter-hc-base.service";

@Injectable()
export class VienThongService extends FilterHCBaseService {
  constructor(private httpClient: HttpClient) {
    super();
  }
  getSLTramVienThongTheoDVHC(nam: string) {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + "/dashboard/qhct-htkt/vt/sl-tramvt-dvhc" + nam
    );
  }
  getSLTramVienThongTheoDonVi(nam: string, params?: FilterHCParams) {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + "/dashboard/qhct-htkt/vt/sl-tramvt-donvi" + nam,
      {
        params: getParams(params),
      }
    );
  }

  getChieuDaiTuyenCapTruyenDanTheoDVHC(nam: string) {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + "/dashboard/qhct-htkt/vt/chieu-dai-captd-dvhc" + nam
    );
  }
  getSoLuong(nam: string, params?: FilterHCParams) {
    return this.httpClient.get<{
      buuCuc: number;
      hoGaCap: number;
      tramVienThong: number;
      chieuDaiTuyenCapTruyenDan: number;
    }>(environment.apiUrl + "/dashboard/qhct-htkt/vt/so-luong" + nam, {
      params: getParams(params),
    });
  }
}
