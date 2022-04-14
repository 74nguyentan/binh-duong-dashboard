import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'chung',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'quy-hoach-khu-chuc-nang',
        loadChildren: () =>
          import('./quy-hoach-su-dung-dat/quy-hoach-su-dung-dat.module').then(
            (m) => m.QuyHoachSuDungDatModule
          ),
      },
      {
        path: 'do-an-qhct',
        loadChildren: () =>
          import('./do-an-qhct/do-an-qhct.module').then(
            (m) => m.DoAnQhctModule
          ),
      },
      {
        path: 'quy-hoach-htkt',
        loadChildren: () =>
          import('./quy-hoach-htkt/quy-hoach-htkt.module').then(
            (m) => m.QuyHoachHtktModule
          ),
      },
      {
        path: 'hien-trang-htkt',
        loadChildren: () =>
          import('./hien-trang-htkt/hien-trang-htkt.module').then(
            (m) => m.HienTrangHtktModule
          ),
      },

      {
        path: 'xuat-bao-cao',
        loadChildren: () =>
          import('./xuat-bao-cao/xuat-bao-cao.module').then(
            (m) => m.XuatBaoCaoModule
          ),
      },
      
      { path: '', redirectTo: 'quy-hoach-khu-chuc-nang', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
