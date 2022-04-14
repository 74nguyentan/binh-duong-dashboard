import { Injectable, Inject } from '@angular/core';
import {
  CrudBaseService,
  RequestQueryBuilder,
  CreateQueryParams,
} from 'nest-crud-typeorm-client';
import { HttpClient } from '@angular/common/http';
import { SuCoModel } from '../../models/thong-ke/su-co.model';
import { Observable } from 'rxjs';
import { ResponseGetThongKe } from './su-co.interface';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class SuCoService extends CrudBaseService<SuCoModel> {
  constructor(http: HttpClient) {
    super(
      {
        apiUrl: environment.apiUrl,
        entity: 'thong-ke/su-co',
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
