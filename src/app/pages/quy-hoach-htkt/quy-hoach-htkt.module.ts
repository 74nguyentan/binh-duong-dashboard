import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuyHoachHtktComponent } from './quy-hoach-htkt.component';
import { RouterModule } from '@angular/router';
import { NbRouteTabsetModule } from '@nebular/theme';
@NgModule({
  declarations: [QuyHoachHtktComponent],
  imports: [
    CommonModule,
    NbRouteTabsetModule,
    RouterModule.forChild([
      {
        path: '',
        component: QuyHoachHtktComponent,
        children: [
          { path: '', redirectTo: 'giao-thong', pathMatch: 'full' },
          {
            path: 'tong-quan',
            loadChildren: () =>
              import('./tong-quan/tong-quan.module').then(
                (m) => m.TongQuanModule
              ),
          },
          {
            path: 'cong-trinh-xay-dung',
            loadChildren: () =>
              import('./cong-trinh-xay-dung/cong-trinh-xay-dung.module').then(
                (m) => m.CongTrinhXayDungModule
              ),
          },
          {
            path: 'giao-thong',
            loadChildren: () =>
              import('./giao-thong/giao-thong.module').then(
                (m) => m.GiaoThongModule
              ),
          },
          {
            path: 'cap-dien',
            loadChildren: () =>
              import('./cap-dien/cap-dien.module').then((m) => m.CapDienModule),
          },
          {
            path: 'cay-xanh',
            loadChildren: () =>
              import('./cay-xanh/cay-xanh.module').then((m) => m.CayXanhModule),
          },
          {
            path: 'moi-truong-do-thi',
            loadChildren: () =>
              import('./moi-truong-do-thi/moi-truong-do-thi.module').then((m) => m.MoiTruongDoThiModule),
          },
          {
            path: 'cap-nuoc',
            loadChildren: () =>
              import('./cap-nuoc/cap-nuoc.module').then((m) => m.CapNuocModule),
          },
          {
            path: 'chieu-sang',
            loadChildren: () =>
              import('./chieu-sang/chieu-sang.module').then(
                (m) => m.ChieuSangModule
              ),
          },
          {
            path: 'thoat-nuoc',
            loadChildren: () =>
              import('./thoat-nuoc/thoat-nuoc.module').then(
                (m) => m.ThoatNuocModule
              ),
          },
          {
            path: 'vien-thong',
            loadChildren: () =>
              import('./vien-thong/vien-thong.module').then(
                (m) => m.VienThongModule
              ),
          },
        ],
      },
    ]),
  ],
})
export class QuyHoachHtktModule {}
