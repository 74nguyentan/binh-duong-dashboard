import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoiTruongDoThiComponent } from './moi-truong-do-thi.component';
import { RouterModule } from '@angular/router';
import { MoiTruongDoThiService } from './moi-truong-do-thi.service';
import { SoLuongModule } from './so-luong/so-luong.module';
import { MapModule } from './map/map.module';
import { SoLuongDvhcModule } from './so-luong-dvhc/so-luong-dvhc.module';
import { SoLuongLntModule } from './so-luong-lnt/so-luong-lnt.module';
import { NbCardModule } from '@nebular/theme';
import { BtnZoomModule } from '@shared/components/btn-zoom/btn-zoom.module';

@NgModule({
  declarations: [MoiTruongDoThiComponent],
  imports: [
    CommonModule,
    SoLuongModule,
    MapModule,
    BtnZoomModule,
    SoLuongDvhcModule,
    SoLuongLntModule,
    NbCardModule,
    RouterModule.forChild([{ path: '', component: MoiTruongDoThiComponent }]),
  ],
  exports: [MoiTruongDoThiComponent],
  providers: [MoiTruongDoThiService],
})
export class MoiTruongDoThiModule {}
