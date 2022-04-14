import { Injectable } from '@angular/core';

@Injectable()
export class QuyHoachSuDungDatStorageService {
  public get mdSDDSelected(): string[] {
    return (JSON.parse(localStorage.getItem('_mdSDDSelected')) ||
      []) as string[];
  }
  public set mdSDDSelected(v: string[]) {
    localStorage.setItem('_mdSDDSelected', JSON.stringify(v));
  }

  public get loaiQuyHoach(): string {
    return localStorage.getItem('loaiQuyHoach') || 'CT';
  }
  public set loaiQuyHoach(v: string) {
    localStorage.setItem('loaiQuyHoach', v);
  }
  public get quanHuyen(): string[] {
    let data = JSON.parse(localStorage.getItem('quanHuyen')) as
      | string[]
      | undefined;
    if (!data || (data && (data as string[]).length === 0)) {
      data = ['718'];
    }
    return data;
  }
  public set quanHuyen(v: string[]) {
    localStorage.setItem('quanHuyen', JSON.stringify(v));
  }

  constructor() {
  }
}
