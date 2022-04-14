import { Injectable } from '@angular/core';
import { LayerModel } from '../models/layer.model';
import { HttpClient } from '@angular/common/http';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class LayerService extends CrudBaseService<LayerModel> {
  constructor(http: HttpClient) {
    super(
      {
        apiUrl: environment.apiUrl,
        entity: 'sys/layer',
      },
      http
    );
  }
}
