import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChieuSangComponent } from "./chieu-sang.component";
import { RouterModule } from "@angular/router";
import { ChieuSangService } from "./chieu-sang.service";
import { SoLuongModule } from "./so-luong/so-luong.module";
import { MapModule } from "./map/map.module";
import { SoLuongDvhcModule } from "./so-luong-dvhc/so-luong-dvhc.module";
import { NbCardModule, NbSelectModule, NbOptionModule } from "@nebular/theme";
import { BtnZoomModule } from "@shared/components/btn-zoom/btn-zoom.module";
@NgModule({
  declarations: [ChieuSangComponent],
  imports: [
    CommonModule,
    BtnZoomModule,
    SoLuongModule,
    MapModule,
    SoLuongDvhcModule,
    NbCardModule,
    NbSelectModule,
    NbOptionModule,
    RouterModule.forChild([{ path: "", component: ChieuSangComponent }]),
  ],
  exports: [ChieuSangComponent],
  providers: [ChieuSangService],
})
export class ChieuSangModule {}
