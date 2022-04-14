import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuyHoachSuDungDatComponent } from './quy-hoach-su-dung-dat.component';
import { RouterModule } from '@angular/router';
import { NbButtonModule, NbCardModule, NbSelectModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { BieuDoMucDichSddModule } from './bieu-do-muc-dich-sdd/bieu-do-muc-dich-sdd.module';
import { BieuDoDvhcModule } from './bieu-do-dvhc/bieu-do-dvhc.module';
import { BieuDoSddQhctNamModule } from './bieu-do-sdd-qhct-nam/bieu-do-sdd-qhct-nam.module';
import { ChuGiaiModule } from './chu-giai/chu-giai.module';
import { QuyHoachSuDungDatService } from './quy-hoach-su-dung-dat.service';
import { QuyHoachSuDungDatStorageService } from './quy-hoach-su-dung-dat.storage.service';
import { MapModule } from './map/map.module';
import { DialogModule } from '@shared/components/dialog/dialog.module';
import { BtnZoomModule } from '@shared/components/btn-zoom/btn-zoom.module';

@NgModule({
  declarations: [QuyHoachSuDungDatComponent],
  imports: [
    CommonModule,
    NbButtonModule,
    NbCardModule,
    ThemeModule,
    BieuDoMucDichSddModule,
    BieuDoDvhcModule,
    BieuDoSddQhctNamModule,
    ChuGiaiModule,
    NbSelectModule,
    BtnZoomModule,
    MapModule,
    DialogModule,
    RouterModule.forChild([
      { path: '', component: QuyHoachSuDungDatComponent },
    ]),
  ],
  providers: [QuyHoachSuDungDatService, QuyHoachSuDungDatStorageService],
})
export class QuyHoachSuDungDatModule { }
