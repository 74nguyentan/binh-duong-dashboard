import { Injectable } from '@angular/core';
import { LayerModel } from '../models/layer.model';
import { HttpClient } from '@angular/common/http';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { environment } from '../../../environments/environment';
import { LoaiQuyHoachEntity } from '../models/loai-quy-hoach.interface';

@Injectable({ providedIn: 'root' })
export class LoaiQuyHoachService extends CrudBaseService<LoaiQuyHoachEntity> {
  constructor(http: HttpClient) {
    super(
      {
        apiUrl: environment.apiUrl,
        entity: 'rest/da-loai',
      },
      http
    );
  }
}
