import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CapDienComponent } from "./cap-dien.component";
import { CapDienService } from "./cap-dien.service";
import { MapModule } from "./map/map.module";
import { SoLuongModule } from "./so-luong/so-luong.module";
import { SoLuongDvhcModule } from "./so-luong-dvhc/so-luong-dvhc.module";
import { ChieuDaiDienApModule } from "./chieu-dai-dien-ap/chieu-dai-dien-ap.module";
import { CongSuatTbaModule } from "./cong-suat-tba/cong-suat-tba.module";
import { RouterModule } from "@angular/router";
import { NbCardModule, NbSelectModule, NbOptionModule } from "@nebular/theme";
import { ChieuDaiTuyenDayDvhcModule } from "./chieu-dai-tuyen-day-dvhc/chieu-dai-tuyen-day-dvhc.module";
import { BtnZoomModule } from "@shared/components/btn-zoom/btn-zoom.module";

@NgModule({
  declarations: [CapDienComponent],
  imports: [
    CommonModule,
    ChieuDaiDienApModule,
    CongSuatTbaModule,
    MapModule,
    BtnZoomModule,
    NbSelectModule,
    NbOptionModule,
    NbCardModule,
    SoLuongModule,
    SoLuongDvhcModule,
    ChieuDaiTuyenDayDvhcModule,
    RouterModule.forChild([{ path: "", component: CapDienComponent }]),
  ],
  exports: [CapDienComponent],
  providers: [CapDienService],
})
export class CapDienModule {}
