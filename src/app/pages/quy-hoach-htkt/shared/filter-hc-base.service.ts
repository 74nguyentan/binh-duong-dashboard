import { Subject } from "rxjs";

export class FilterHCBaseService {
  private quanHuyenSelectedSubject = new Subject<string[]>();
  private phuongXaSelectedSubject = new Subject<string[]>();
  private namSelectedSubject = new Subject<number[]>();
  quanHuyenSelected$ = this.quanHuyenSelectedSubject.asObservable();
  phuongXaSelected$ = this.phuongXaSelectedSubject.asObservable();
  namSelected$ = this.namSelectedSubject.asObservable();
  changeQuanHuyenSelected(value: string[]) {
    this.quanHuyenSelectedSubject.next(value);
  }
  changePhuongXaSelected(value: string[]) {
    this.phuongXaSelectedSubject.next(value);
  }
  changeNamSelected(value: number[]) {
    this.namSelectedSubject.next(value);
  }
}
