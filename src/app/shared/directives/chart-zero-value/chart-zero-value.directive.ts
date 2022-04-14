import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ChartSingle } from '../../models/thong-ke/chart-response.model';

@Directive({
  selector:
    'ngx-charts-bar-horizontal[chart-zero-value],ngx-charts-pie-chart[chart-zero-value]',
})
export class ChartZeroValueDirective {
  private _data: ChartSingle[];
  @Output() fireValueZero = new EventEmitter<boolean>();

  @Input() set results(val: ChartSingle[]) {
    this._data = val;
    let isZero = true;
    val.forEach((f) => {
      if (f.value !== 0) {
        isZero = false;
        return;
      }
    });
    const childs = this.ref.nativeElement.parentElement.querySelectorAll(
      '#chart-zero-value-directive'
    );
    childs.forEach((c) => c.remove());
    if (isZero) {
      this.fireValueZero.emit(true);
      this.ref.nativeElement.style.display = 'none';
      const span = document.createElement('div');
      span.style.display = 'flex';
      span.style.justifyContent = 'center';
      span.style.alignItems = 'center';
      span.style.height = '100%';
      span.id = 'chart-zero-value-directive';
      span.innerText = 'Không có dữ liệu';
      this.ref.nativeElement.parentElement.appendChild(span);
    } else {
      this.ref.nativeElement.style.display = 'block';
    }
  }
  constructor(private ref: ElementRef<HTMLDivElement>) {}
}
