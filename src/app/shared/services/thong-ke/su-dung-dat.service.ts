import { Injectable, Inject } from '@angular/core';
import {
  CrudBaseService,
  RequestQueryBuilder,
  CreateQueryParams,
} from 'nest-crud-typeorm-client';
import { HttpClient } from '@angular/common/http';
import { SuDungDatModel } from '../../models/thong-ke/su-dung-dat.model';
import { Observable } from 'rxjs';
import { ResponseGetThongKe } from './su-dung-dat.interface';
import { environment } from '../../../../environments/environment';
export * from './su-dung-dat.interface';

@Injectable({ providedIn: 'root' })
export class SuDungDatService extends CrudBaseService<SuDungDatModel> {
  constructor(http: HttpClient) {
    super(
      {
        apiUrl: environment.apiUrl,
        entity: 'thong-ke/su-dung-dat',
      },
      http
    );
  }

  getThongKe(
    builder?: RequestQueryBuilder | CreateQueryParams
  ): Observable<ResponseGetThongKe> {
    return this.http.get<ResponseGetThongKe>(this.getBaseUrl() + '/thong-ke', {
      params: this.getParamsFromQuery(builder),
    });
  }
}
