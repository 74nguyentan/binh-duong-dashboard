import { Subject } from 'rxjs';

export class FilterHCBaseService {
  private quanHuyenSelectedSubject = new Subject<string[]>();
  private phuongXaSelectedSubject = new Subject<string[]>();
  quanHuyenSelected$ = this.quanHuyenSelectedSubject.asObservable();
  phuongXaSelected$ = this.phuongXaSelectedSubject.asObservable();
  changeQuanHuyenSelected(value: string[]) {
    this.quanHuyenSelectedSubject.next(value);
  }
  changePhuongXaSelected(value: string[]) {
    this.phuongXaSelectedSubject.next(value);
  }
}
