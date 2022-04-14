import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GiaoThongComponent } from "./giao-thong.component";
import { RouterModule } from "@angular/router";
import { GiaoThongService } from "./giao-thong.service";
import {
  NbCardModule,
  NbFormFieldModule,
  NbIconModule,
  NbSelectModule,
  NbOptionModule,
} from "@nebular/theme";
import { MapModule } from "./map/map.module";
import { SoLuongModule } from "./so-luong/so-luong.module";
import { BieuDoChieuDaiDvhcModule } from "./bieu-do-chieu-dai-dvhc/bieu-do-chieu-dai-dvhc.module";
import { BieuDoDienTichDvhcModule } from "./bieu-do-dien-tich-dvhc/bieu-do-dien-tich-dvhc.module";
import { BtnZoomModule } from "@shared/components/btn-zoom/btn-zoom.module";

@NgModule({
  declarations: [GiaoThongComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NbSelectModule,
    NbOptionModule,
    MapModule,
    BtnZoomModule,
    NbFormFieldModule,
    NbIconModule,
    SoLuongModule,
    BieuDoChieuDaiDvhcModule,
    BieuDoDienTichDvhcModule,
    RouterModule.forChild([{ path: "", component: GiaoThongComponent }]),
  ],
  exports: [GiaoThongComponent],
  providers: [GiaoThongService],
})
export class GiaoThongModule {}
