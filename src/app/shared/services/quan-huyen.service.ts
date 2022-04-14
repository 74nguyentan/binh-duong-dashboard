import { CrudBaseService } from 'nest-crud-typeorm-client';
import { QuanHuyenEntity } from '../models/quan-huyen.model';
import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class QuanHuyenService extends CrudBaseService<QuanHuyenEntity>{
    constructor(
        http:HttpClient,
    ) {
        super({
            apiUrl: environment.apiUrl,
            entity: 'rest/hanh-chinh-huyen'
        }, http);
    }
}