import { Injectable, Inject } from '@angular/core';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { HttpClient } from '@angular/common/http';
import { DatasetModel } from '../models/dataset.model';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class DatasetService extends CrudBaseService<DatasetModel> {
  constructor(http: HttpClient) {
    super(
      {
        apiUrl: environment.apiUrl,
        entity: 'sys/dataset',
      },
      http
    );
  }
}
