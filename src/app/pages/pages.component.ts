import { Component, OnInit, AfterViewInit } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';
import { DTGAuthService } from 'ditagis-auth';
import { NbMenuService, NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu" ></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent implements OnInit,AfterViewInit {
  constructor(
    private authService: DTGAuthService,
    private sidebarService: NbSidebarService
  ) { }

  menu = MENU_ITEMS;
  ngOnInit() {
    this.menu.forEach((item) => {
      if (item.data) {
        this.authService
          .isAccess({ appId: item.data })
          .toPromise()
          .then((value) => (item.hidden = !value));
      }
    });
  }
  ngAfterViewInit(){
    this.sidebarService.collapse('menu-sidebar');

  }
}
