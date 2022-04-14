import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { environment } from '../../../../environments/environment';
import { DoAnEntity } from './do-an.interface';

@Injectable({ providedIn: 'root' })
export class DoAnService extends CrudBaseService<DoAnEntity> {
  constructor(http: HttpClient) {
    super(
      {
        apiUrl: environment.apiUrl,
        entity: 'rest/do-an',
      },
      http
    );
  }
}
