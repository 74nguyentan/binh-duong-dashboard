import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThoatNuocComponent } from './thoat-nuoc.component';
import { RouterModule } from '@angular/router';
import { ThoatNuocService } from './thoat-nuoc.service';
import { NbCardModule } from '@nebular/theme';
import { MapModule } from './map/map.module';
import { SoLuongDvhcModule } from './so-luong-dvhc/so-luong-dvhc.module';
import { BieuDoHoGaDuongKinhModule } from './bieu-do-ho-ga-duong-kinh/bieu-do-ho-ga-duong-kinh.module';
import { BieuDoHoGaLoaiModule } from './bieu-do-ho-ga-loai/bieu-do-ho-ga-loai.module';
import { SoLuongModule } from './so-luong/so-luong.module';
import { BieuDoHoGaDvhcModule } from './bieu-do-ho-ga-dvhc/bieu-do-ho-ga-dvhc.module';
import { BtnZoomModule } from '@shared/components/btn-zoom/btn-zoom.module';

@NgModule({
  declarations: [ThoatNuocComponent],
  imports: [
    CommonModule,
    NbCardModule,
    MapModule,
    SoLuongModule,
    BtnZoomModule,
    SoLuongDvhcModule,
    BieuDoHoGaDuongKinhModule,
    BieuDoHoGaLoaiModule,
    BieuDoHoGaDvhcModule,
    RouterModule.forChild([{ path: '', component: ThoatNuocComponent }]),
  ],
  exports: [ThoatNuocComponent],
  providers: [ThoatNuocService],
})
export class ThoatNuocModule {}
