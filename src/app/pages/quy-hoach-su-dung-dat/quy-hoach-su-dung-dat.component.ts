import { Component, HostListener, OnInit } from '@angular/core';
import { LoaiQuyHoachService } from '../../shared/services/loai-quy-hoach.service';
import { MucDichSuDungDatEntity } from '../../shared/models/su-dung.dat.interface';
import { DMMucDichSuDungDatService } from '../../shared/services/dm-muc-dich-su-dung-dat.service';
import { QuyHoachSuDungDatService } from './quy-hoach-su-dung-dat.service';
import { LoaiQuyHoachEntity } from '../../shared/models/loai-quy-hoach.interface';
import { QuanHuyenService } from '../../shared/services/quan-huyen.service';
import { QuanHuyenEntity } from '../../shared/models/quan-huyen.model';

@Component({
  selector: 'ga-quy-hoach-su-dung-dat',
  templateUrl: './quy-hoach-su-dung-dat.component.html',
  styleUrls: ['./quy-hoach-su-dung-dat.component.scss'],
})
export class QuyHoachSuDungDatComponent implements OnInit {

  zoom_1:boolean = false;
  zoom_2:boolean = false;
  lstMucDichSuDungDat: MucDichSuDungDatEntity[];
  lstLoaiQuyHoach: LoaiQuyHoachEntity[];
  lstQuanHuyen: QuanHuyenEntity[];
  constructor(
    public service: QuyHoachSuDungDatService,
    private qhService: QuanHuyenService,
    public lqhService: LoaiQuyHoachService,
    private dmMucDichSDDService: DMMucDichSuDungDatService
  ) { }

  ngOnInit() {
    this.qhService
      .getMany({
        fields: ['maQuanHuyen', 'tenQuanHuyen'] as Array<keyof QuanHuyenEntity>,
        filter: [
          { field: 'maTinhTP', operator: '$eq', value: '74' }
        ]
      })
      .toPromise()
      .then((value) => (this.lstQuanHuyen = value));
    this.lqhService
      .getMany({
        fields: ['maLQH', 'tenLQH'] as Array<keyof LoaiQuyHoachEntity>,
      })
      .toPromise()
      .then((value) => (this.lstLoaiQuyHoach = value));
    this.service.loaiQuyHoachSelected$.subscribe((value) =>
      this.dmMucDichSDDService
        .getMany({
          fields: ['maDanhMuc', 'tenDanhMuc'] as Array<
            keyof MucDichSuDungDatEntity
          >,
          filter: [{ field: 'loaiDanhMuc', operator: '$eq', value: value }],
        })
        .toPromise()
        .then((value) => (this.lstMucDichSuDungDat = value))
    );
  }

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {

    // const rad = document.getElementById("zoom_1");
    // this.check1 = !this.check1;
    // console.log('==================================== esc + ' + this.check1);

  }

  // setChecked() {
  //   this.check1 = false;
  //   console.log("--------- " + this.check1);
    
  // }


}
