import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseStatistics } from '../../../shared/models/thong-ke/response.model';
import { environment } from '../../../../environments/environment';
import { FilterHCParams, getParams } from '@shared/models/thong-ke/filter-hc.interface';
import { FilterHCBaseService } from '../shared/filter-hc-base.service';

@Injectable()
export class CapNuocService extends FilterHCBaseService {
  constructor(private httpClient: HttpClient) {
    super();
  }
  
  getSLDHKHTheoDVHC() {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + '/dashboard/hien-trang-htkt/cn/dhkh-dvhc'
    );
  }

  getSLDHKHTheoMDSD() {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + '/dashboard/hien-trang-htkt/cn/dhkh-mdsd'
    );
  }
  getSLVanTheoLoai() {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + '/dashboard/hien-trang-htkt/cn/van-loai-van'
    );
  }
  getSLDHKHTheoCoDongHo() {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + '/dashboard/hien-trang-htkt/cn/dhkh-co-dong-ho'
    );
  }
  getSLDHTTheoDVHC() {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + '/dashboard/hien-trang-htkt/cn/dht-dvhc'
    );
  }
  getSLDCOTheoDVHC() {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + '/dashboard/hien-trang-htkt/cn/diem-cuoi-ong-dvhc'
    );
  }
  getSLTBTheoDVHC() {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + '/dashboard/hien-trang-htkt/cn/tram-bom-dvhc'
    );
  }
  getCSNMNTheoDVHC() {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + '/dashboard/hien-trang-htkt/cn/csuatnmn-dvhc'
    );
  }
  getChieuDaiTheoCoOng() {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + 
      '/dashboard/hien-trang-htkt/cn/chieu-dai-co-ong'
      // '/dashboard/hien-trang-htkt/tn/sl-ho-ga-duong-kinh'
    );
  }
  getChieuDaiTheoCapOng() {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + '/dashboard/hien-trang-htkt/cn/chieu-dai-cap-ong'
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
  getChieuDaiCongThoatNuocTheoDVHC() {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl +
        '/dashboard/hien-trang-htkt/tn/chieu-dai-cong-thoat-nuoc-dvhc'
    );
  }
  getSoLuong(params?: FilterHCParams) {
    return this.httpClient.get<{
      chieuDaiTuyenOng: number;
      soLuongNhaMayNuoc: number;
      congSuatNhaMayNuoc: number;
      soLuongKhachHang:number;
    }>(
      environment.apiUrl + '/dashboard/hien-trang-htkt/cn/so-luong',
      {
        params: getParams(params),
      }
    );
  }
}
