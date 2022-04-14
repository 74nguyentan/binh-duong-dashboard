import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoAnQhctComponent } from './do-an-qhct.component';
import { BieuDoTienDoBdsModule } from './bieu-do-tien-do-bds/bieu-do-tien-do-bds.module';
import { BieuDoLoaiBdsDvhcModule } from './bieu-do-loai-bds-dvhc/bieu-do-loai-bds-dvhc.module';
import { LoaiDuAnModule } from './loai-du-an/loai-du-an.module';
import { LoaiDuAnBdsModule } from './loai-du-an-bds/loai-du-an-bds.module';
import { SoLuongModule } from './so-luong/so-luong.module';
import { RouterModule } from '@angular/router';
import { NbCardModule, NbTabsetModule } from '@nebular/theme';
import { MapModule } from './map/map.module';
import { BieuDoDvhcModule } from './bieu-do-dvhc/bieu-do-dvhc.module';
import { DoAnQHCTService } from './do-an-qhct.service';
import { BieuDoMdsddTdaModule } from './bieu-do-mdsdd-tda/bieu-do-mdsdd-tda.module';
import { BtnZoomModule } from '@shared/components/btn-zoom/btn-zoom.module';

@NgModule({
  declarations: [DoAnQhctComponent],
  imports: [
    CommonModule,
    BieuDoDvhcModule,
    BieuDoLoaiBdsDvhcModule,
    BieuDoTienDoBdsModule,
    BieuDoMdsddTdaModule,
    LoaiDuAnModule,
    LoaiDuAnBdsModule,NbTabsetModule,
    BtnZoomModule,
    SoLuongModule,
    NbCardModule,
    MapModule,
    RouterModule.forChild([
      {
        path: '',
        component: DoAnQhctComponent,
      },
    ]),
  ],
  providers: [DoAnQHCTService],
})
export class DoAnQhctModule {}
