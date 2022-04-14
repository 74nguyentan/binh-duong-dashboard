import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CongTrinhXayDungComponent } from "./cong-trinh-xay-dung.component";
import { SoLuongModule } from "./so-luong/so-luong.module";
import { NbCardModule, NbSelectModule, NbOptionModule } from "@nebular/theme";
import { MapModule } from "./map/map.module";
import { LoaiCtDvhcModule } from "./loai-ct-dvhc/loai-ct-dvhc.module";
import { BieuDoPhanLoaiCtxdModule } from "./bieu-do-phan-loai-ctxd/bieu-do-phan-loai-ctxd.module";
import { BieuDoTrangThaiCtctModule } from "./bieu-do-trang-thai-ctct/bieu-do-trang-thai-ctct.module";
import { CongTrinhXayDungService } from "./cong-trinh-xay-dung.service";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [CongTrinhXayDungComponent],
  imports: [
    CommonModule,
    SoLuongModule,
    NbSelectModule,
    NbOptionModule,
    NbCardModule,
    MapModule,
    LoaiCtDvhcModule,
    BieuDoPhanLoaiCtxdModule,
    BieuDoTrangThaiCtctModule,
    RouterModule.forChild([{ path: "", component: CongTrinhXayDungComponent }]),
  ],
  providers: [CongTrinhXayDungService],
  exports: [CongTrinhXayDungComponent],
})
export class CongTrinhXayDungModule {}
