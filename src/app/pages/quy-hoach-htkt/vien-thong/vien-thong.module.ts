import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { VienThongComponent } from "./vien-thong.component";
import { RouterModule } from "@angular/router";
import { BieuDoChieuDaiTctdDvhcModule } from "./bieu-do-chieu-dai-tctd-dvhc/bieu-do-chieu-dai-tctd-dvhc.module";
import { BieuDoTramvtDvhcModule } from "./bieu-do-tramvt-dvhc/bieu-do-tramvt-dvhc.module";
import { MapModule } from "./map/map.module";
import { SoLuongModule } from "./so-luong/so-luong.module";
import { NbCardModule, NbSelectModule, NbOptionModule } from "@nebular/theme";
import { VienThongService } from "./vien-thong.service";
import { BieuDoTramvtDvqlModule } from "./bieu-do-tramvt-dvql/bieu-do-tramvt-dvql.module";
import { BtnZoomModule } from "@shared/components/btn-zoom/btn-zoom.module";

@NgModule({
  declarations: [VienThongComponent],
  imports: [
    CommonModule,
    BieuDoChieuDaiTctdDvhcModule,
    BieuDoTramvtDvhcModule,
    MapModule,
    BtnZoomModule,
    NbSelectModule,
    NbOptionModule,
    BieuDoTramvtDvqlModule,
    SoLuongModule,
    NbCardModule,
    RouterModule.forChild([{ path: "", component: VienThongComponent }]),
  ],
  exports: [VienThongComponent],
  providers: [VienThongService],
})
export class VienThongModule {}
