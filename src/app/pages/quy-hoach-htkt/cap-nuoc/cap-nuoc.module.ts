import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CapNuocComponent } from "./cap-nuoc.component";
import { RouterModule } from "@angular/router";
import { CapNuocService } from "./cap-nuoc.service";
import { NbCardModule, NbSelectModule, NbOptionModule } from "@nebular/theme";
import { MapModule } from "./map/map.module";
import { SoLuongDvhcModule } from "./so-luong-dvhc/so-luong-dvhc.module";

import { SoLuongModule } from "./so-luong/so-luong.module";
import { BieuDoDHKHDvhcModule } from "./bieu-do-dhkh-dvhc/bieu-do-dhkh-dvhc.module";
import { BieuDoDHTDvhcModule } from "./bieu-do-dht-dvhc/bieu-do-dht-dvhc.module";
import { BieuDoChieuDaiCoOngModule } from "./bieu-do-chieu-dai-co-ong/bieu-do-chieu-dai-co-ong.module";
import { BieuDoDCODvhcModule } from "./bieu-do-dco-dvhc/bieu-do-dco-dvhc.module";
import { BieuDoTBDvhcModule } from "./bieu-do-tb-dvhc/bieu-do-tb-dvhc.module";
import { BieuDoNMNDvhcModule } from "./bieu-do-nmn-dvhc/bieu-do-mnn-dvhc.module";
import { BieuDoCDCOModule } from "./bieu-do-chieu-dai-cap-ong/bieu-do-cdco.module";
import { BieuDoDHKHTheoCoDongHoModule } from "./bieu-do-dhkh-co-dong-ho/bieu-do-dhkh-co-dong-ho.module";
import { BieuDoVanLoaiVanModule } from "./bieu-do-van-loai-van/bieu-do-van-loai-van.module";
import { BieuDoDHKHTheoMucDichSuDungModule } from "./bieu-do-dhkh-mdsd/bieu-do-dhkh-mdsd.module";
import { BtnZoomModule } from "@shared/components/btn-zoom/btn-zoom.module";

@NgModule({
  declarations: [CapNuocComponent],
  imports: [
    CommonModule,
    NbCardModule,
    BtnZoomModule,
    MapModule,
    NbSelectModule,
    NbOptionModule,
    SoLuongModule,
    SoLuongDvhcModule,
    BieuDoChieuDaiCoOngModule,
    BieuDoDHKHDvhcModule,
    BieuDoDHTDvhcModule,
    BieuDoTBDvhcModule,
    BieuDoNMNDvhcModule,
    BieuDoDCODvhcModule,
    BieuDoCDCOModule,
    BieuDoDHKHTheoCoDongHoModule,
    BieuDoVanLoaiVanModule,
    BieuDoDHKHTheoMucDichSuDungModule,
    RouterModule.forChild([{ path: "", component: CapNuocComponent }]),
  ],
  exports: [CapNuocComponent],
  providers: [CapNuocService],
})
export class CapNuocModule {}
