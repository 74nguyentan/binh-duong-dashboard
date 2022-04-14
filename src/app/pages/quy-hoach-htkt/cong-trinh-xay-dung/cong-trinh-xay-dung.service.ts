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
export class CongTrinhXayDungService extends FilterHCBaseService {
  constructor(private httpClient: HttpClient) {
    super();
  }
  getSoLuong(nam: string, params?: FilterHCParams) {
    return this.httpClient.get<any>(
      environment.apiUrl + "/dashboard/qhct-htkt/ctxd/so-luong" + nam,
      {
        params: getParams(params),
      }
    );
  }
  getLoaiCTDVHC(nam: string) {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + "/dashboard/qhct-htkt/ctxd/loai-ctd-dvhc" + nam
    );
  }

  getPhanLoaiCTXD(nam: string, params?: FilterHCParams) {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + "/dashboard/qhct-htkt/ctxd/loai-ctxd" + nam,
      {
        params: getParams(params),
      }
    );
  }
  getTinhTrangCTCT(nam: string, params?: FilterHCParams) {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + "/dashboard/qhct-htkt/ctxd/tinh-trang-ctct" + nam,
      {
        params: getParams(params),
      }
    );
  }
}
