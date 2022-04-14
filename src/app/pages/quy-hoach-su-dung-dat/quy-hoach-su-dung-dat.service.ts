import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ResponseStatistics } from '../../shared/models/thong-ke/response.model';
import { BehaviorSubject, Subject } from 'rxjs';
import { QuyHoachSuDungDatStorageService } from './quy-hoach-su-dung-dat.storage.service';
import { DMMucDichSuDungDatService } from '../../shared/services/dm-muc-dich-su-dung-dat.service';
import { MucDichSuDungDatEntity } from '../../shared/models/su-dung.dat.interface';

@Injectable()
export class QuyHoachSuDungDatService {
  private mdSDDSelectedSubject = new BehaviorSubject<string[]>(
    this.storage.mdSDDSelected
  );
  mdSDDSelected$ = this.mdSDDSelectedSubject.asObservable();
  changeMDSDDSelected(value: string[]) {
    this.storage.mdSDDSelected = value;
    return this.mdSDDSelectedSubject.next(value);
  }
  private loaiQuyHoachSelectedSubject = new BehaviorSubject<string>(
    this.storage.loaiQuyHoach
  );
  loaiQuyHoachSelected$ = this.loaiQuyHoachSelectedSubject.asObservable();
  changeloaiQuyHoachSelected(value: string) {
    this.storage.loaiQuyHoach = value;
    if (value !== this.loaiQuyHoachSelectedSubject.getValue())
      if (this.storage.mdSDDSelected.length === 0) {
        this.dmmdsddService
          .getMany({
            limit: 5,
            fields: ['maDanhMuc', 'stt'] as Array<keyof MucDichSuDungDatEntity>,
            sort: [{ field: 'stt', order: 'ASC' }],
            filter: [{ field: 'loaiDanhMuc', operator: '$eq', value }],
          })
          .subscribe(
            (v) => (this.storage.mdSDDSelected = v.map((m) => m.maDanhMuc))
          );
      }
    return this.loaiQuyHoachSelectedSubject.next(value);
  }
  private quanHuyenSelectedSubject = new BehaviorSubject<string[]>(
    this.storage.quanHuyen
  );
  quanHuyenSelected$ = this.quanHuyenSelectedSubject.asObservable();
  changeQuanHuyenSelected(value: string[]) {
    this.storage.quanHuyen = value;
    return this.quanHuyenSelectedSubject.next(value);
  }
  constructor(
    private httpClient: HttpClient,
    private storage: QuyHoachSuDungDatStorageService,
    private dmmdsddService: DMMucDichSuDungDatService
  ) {}
  getMucDichSDD(params: {
    lqh: string;
    mdsdd: string[];
    quanHuyens: string[];
  }) {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + '/dashboard/qh-sdd/mdssd',
      { params: new HttpParams({ fromObject: params }) }
    );
  }
  getSDDDVHC(params: { lqh: string; mdsdd: string[]; quanHuyens: string[] }) {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + '/dashboard/qh-sdd/sdddvhc',
      { params: new HttpParams({ fromObject: params }) }
    );
  }
  getQhctSddNam(params: { mdsdd: string[]; quanHuyens: string[] }) {
    return this.httpClient.get<ResponseStatistics>(
      environment.apiUrl + '/dashboard/qh-sdd/qhctsddnam',
      { params: new HttpParams({ fromObject: params }) }
    );
  }
}
