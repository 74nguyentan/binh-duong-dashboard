import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { HaTangKyThuatModule } from './ha-tang-ky-thuat/ha-tang-ky-thuat.module';
import { NhaoBdsModule } from './nhao-bds/nhao-bds.module';
import { SuCoModule } from './su-co/su-co.module';
import { SuDungDatModule } from './su-dung-dat/su-dung-dat.module';
import { SharedNebularModule } from '../../shared/nebular.module';
import { RouterModule } from '@angular/router';
import { ThemeModule } from '../../@theme/theme.module';
import { NbCardModule } from '@nebular/theme';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ThemeModule,
    HaTangKyThuatModule,
    NhaoBdsModule,
    NbCardModule,
    SuCoModule,
    SuDungDatModule,
    RouterModule.forChild([{ path: '', component: HomeComponent }]),
  ],
})
export class HomeModule {}
