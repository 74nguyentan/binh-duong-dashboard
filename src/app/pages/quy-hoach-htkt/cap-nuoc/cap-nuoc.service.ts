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
export class CapNuocService extends FilterHCBaseService {
  constructor(private httpClient: HttpClient) {
    super();
  }

  getSLDHKHTheoDVHC(nam: string) {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + "/dashboard/qhct-htkt/cn/dhkh-dvhc" + nam
    );
  }

  getSLDHKHTheoMDSD(nam: string) {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + "/dashboard/qhct-htkt/cn/dhkh-mdsd" + nam
    );
  }
  getSLVanTheoLoai(nam: string) {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + "/dashboard/qhct-htkt/cn/van-loai-van" + nam
    );
  }
  getSLDHKHTheoCoDongHo(nam: string) {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + "/dashboard/qhct-htkt/cn/dhkh-co-dong-ho" + nam
    );
  }
  getSLDHTTheoDVHC(nam: string) {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + "/dashboard/qhct-htkt/cn/dht-dvhc" + nam
    );
  }
  getSLDCOTheoDVHC(nam: string) {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + "/dashboard/qhct-htkt/cn/diem-cuoi-ong-dvhc" + nam
    );
  }
  getSLTBTheoDVHC(nam: string) {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + "/dashboard/qhct-htkt/cn/tram-bom-dvhc" + nam
    );
  }
  getCSNMNTheoDVHC(nam: string) {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + "/dashboard/qhct-htkt/cn/csuatnmn-dvhc" + nam
    );
  }
  getChieuDaiTheoCoOng(nam: string) {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + "/dashboard/qhct-htkt/cn/chieu-dai-co-ong" + nam
      // '/dashboard/qhct-htkt/tn/sl-ho-ga-duong-kinh'
    );
  }
  getChieuDaiTheoCapOng(nam: string) {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + "/dashboard/qhct-htkt/cn/chieu-dai-cap-ong" + nam
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
  getChieuDaiCongThoatNuocTheoDVHC(nam: string) {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl +
        "/dashboard/qhct-htkt/tn/chieu-dai-cong-thoat-nuoc-dvhc" +
        nam
    );
  }
  getSoLuong(nam: string, params?: FilterHCParams) {
    return this.httpClient.get<{
      chieuDaiTuyenOng: number;
      soLuongNhaMayNuoc: number;
      congSuatNhaMayNuoc: number;
      soLuongKhachHang: number;
    }>(environment.apiUrl + "/dashboard/qhct-htkt/cn/so-luong" + nam, {
      params: getParams(params),
    });
  }
}
