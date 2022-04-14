import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { XuatBaoCaoEnum } from '@shared/services/bao-cao/bao-cao.interface';
import { ExcelService } from '@shared/services/bao-cao/bao-cao.service';

@Component({
  selector: 'ga-xuat-bao-cao',
  templateUrl: './xuat-bao-cao.component.html',
  styleUrls: ['./xuat-bao-cao.component.css']
})
export class XuatBaoCaoComponent implements OnInit {
  isShowDialog = false;
  xuatBaoCaoEnum = XuatBaoCaoEnum;
  mauBaoCao: XuatBaoCaoEnum;
  namBaoCao: number;
  status = {
    saving: false,
  };
  lstYear = Array.from(
    new Array(10),
    (val, index) => new Date().getFullYear() - index
  );

  constructor( private excelService:ExcelService,
               private toast: NbToastrService,) { }

  ngOnInit(){
  }
  closeDlg() {
    this.isShowDialog = false;
    this.mauBaoCao  = undefined;
  }
  async xuatBaoCao() {
    if(this.mauBaoCao === XuatBaoCaoEnum.NghiaTrangPL3){
      this.status.saving = true;
      try {
        await this.excelService.xuatNghiaTrangPhuLuc3();
        this.closeDlg();
      } catch (e) {
        this.toast.danger(e);
      } finally {
        this.status.saving = false;
      }
    }
    else if (this.mauBaoCao) {
      this.status.saving = true;
      try {
        await this.excelService.xuatMauBaoCao(this.mauBaoCao);
        this.closeDlg();
      } catch (e) {
        this.toast.danger(e);
      } finally {
        this.status.saving = false;
      }
    } else {
      this.toast.danger('Vui lòng chọn đầy đủ các trường');
    }
  }

}
