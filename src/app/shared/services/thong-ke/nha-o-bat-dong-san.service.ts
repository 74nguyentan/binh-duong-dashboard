import { CrudBaseService, RequestQueryBuilder, CreateQueryParams } from 'nest-crud-typeorm-client';
import { NhaOBatDongSanModel } from '../../models/thong-ke/nha-o-bat-dong-san.model';
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseGetThongKe } from './nha-o-bat-dong-san.interface';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class NhaOBatDongSanService extends CrudBaseService<NhaOBatDongSanModel>{
    constructor(
        http:HttpClient,
    ) {
        super({
            apiUrl: environment.apiUrl,
            entity: 'thong-ke/nhao-bds'
        },http);
    }

    getThongKe(builder?: RequestQueryBuilder | CreateQueryParams): Observable<ResponseGetThongKe> {
        return this.http.get<ResponseGetThongKe>(this.getBaseUrl() + '/thong-ke', {
            params: this.getParamsFromQuery(builder)
        });
    }
}