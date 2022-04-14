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
export class ThoatNuocService extends FilterHCBaseService {
  constructor(private httpClient: HttpClient) {
    super();
  }
  getSLHoGaTheoDVHC(nam: string) {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + "/dashboard/qhct-htkt/tn/sl-ho-ga-dvhc" + nam
    );
  }
  getSLHoGaTheoLoai(nam: string, params?: FilterHCParams) {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + "/dashboard/qhct-htkt/tn/sl-ho-ga-loai" + nam,
      {
        params: getParams(params),
      }
    );
  }
  getSLHoGaTheoDuongKinh(nam: string, params?: FilterHCParams) {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + "/dashboard/qhct-htkt/tn/sl-ho-ga-duong-kinh" + nam,
      {
        params: getParams(params),
      }
    );
  }
  getChieuDaiCongThoatNuocTheoDVHC(nam: string) {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl +
        "/dashboard/qhct-htkt/tn/chieu-dai-cong-thoat-nuoc-dvhc" +
        nam
    );
  }
  getSoLuong(nam: string, params?: FilterHCParams) {
    return this.httpClient.get<{
      miengXa: number;
      tramXLNT: number;
      csuatTramXLNT: number;
      chieuDaiCTN: number;
    }>(environment.apiUrl + "/dashboard/qhct-htkt/tn/so-luong" + nam, {
      params: getParams(params),
    });
  }
}
