import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseStatistics } from '../../shared/models/thong-ke/response.model';
import { environment } from '../../../environments/environment';

@Injectable()
export class DoAnQHCTService {
  constructor(private httpClient: HttpClient) { }

  getMucDichSddTDA(maDoAn: string) {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + `/dashboard/da-qhct/mdsdd-theo-da?maDoAn=${maDoAn}`
    );
  }

  getLoaiDuAn() {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + '/dashboard/da-qhct/loai-du-an'
    );
  }
  getLoaiDuAnBDS() {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + '/dashboard/da-qhct/loai-du-an-bds'
    );
  }
  getLoaiDABDSDVHC() {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + '/dashboard/da-qhct/loai-du-an-bds-dvhc'
    );
  }
  getLoaiDADVHC() {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + '/dashboard/da-qhct/loai-du-an-dvhc'
    );
  }
  getTienDoBDS() {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + '/dashboard/da-qhct/tien-do-bds'
    );
  }
  getSoLuong() {
    return this.httpClient.get<{ qhct: number; bds: number }>(
      environment.apiUrl + '/dashboard/da-qhct/so-luong'
    );
  }
}
