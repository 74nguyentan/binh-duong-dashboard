import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CayXanhComponent } from "./cay-xanh.component";
import { RouterModule } from "@angular/router";
import { CayXanhService } from "./cay-xanh.service";
import { SoLuongModule } from "./so-luong/so-luong.module";
import { MapModule } from "./map/map.module";
import { SoLuongDvhcModule } from "./so-luong-dvhc/so-luong-dvhc.module";
import { NbCardModule, NbSelectModule, NbOptionModule } from "@nebular/theme";
import { BtnZoomModule } from "@shared/components/btn-zoom/btn-zoom.module";

@NgModule({
  declarations: [CayXanhComponent],
  imports: [
    CommonModule,
    SoLuongModule,
    MapModule,
    BtnZoomModule,
    SoLuongDvhcModule,
    NbSelectModule,
    NbOptionModule,
    NbCardModule,
    RouterModule.forChild([{ path: "", component: CayXanhComponent }]),
  ],
  exports: [CayXanhComponent],
  providers: [CayXanhService],
})
export class CayXanhModule {}
