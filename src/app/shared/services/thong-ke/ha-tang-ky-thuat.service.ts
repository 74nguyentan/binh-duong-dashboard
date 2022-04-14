import { Injectable, Inject, Optional } from '@angular/core';
import {
  CrudBaseService,
  RequestQueryBuilder,
  CreateQueryParams,
} from 'nest-crud-typeorm-client';
import { HaTangKyThuatModel } from '../../models/thong-ke/ha-tang-ky-thuat.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseGetThongKe } from './ha-tang-ky-thuat.interface';
import { environment } from '../../../../environments/environment';
@Injectable({ providedIn: 'root' })
export class HaTangKyThuatService extends CrudBaseService<HaTangKyThuatModel> {
  constructor(http: HttpClient) {
    super(
      {
        apiUrl: environment.apiUrl,
        entity: 'thong-ke/ha-tang-ky-thuat',
      },
      http
    );
  }

  getThongKe(
    builder?: RequestQueryBuilder | CreateQueryParams
  ): Observable<ResponseGetThongKe[]> {
    return this.http.get<ResponseGetThongKe[]>(
      this.getBaseUrl() + '/thong-ke',
      {
        params: this.getParamsFromQuery(builder),
      }
    );
  }
}
