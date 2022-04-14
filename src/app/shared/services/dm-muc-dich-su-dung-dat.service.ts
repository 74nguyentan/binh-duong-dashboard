import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { MucDichSuDungDatEntity } from '../models/su-dung.dat.interface';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class DMMucDichSuDungDatService extends CrudBaseService<
  MucDichSuDungDatEntity
> {
  constructor(httpClient: HttpClient) {
    super(
      { apiUrl: environment.apiUrl, entity: 'rest/dm-muc-dich-sdd' },
      httpClient
    );
  }
}
