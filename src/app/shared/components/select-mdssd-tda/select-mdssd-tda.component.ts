import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DoAnEntity, QuyHoachChiTietEntity } from '@shared/services/do-an/do-an.interface';
import { DoAnService } from '@shared/services/do-an/do-an.service';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'ga-select-mdssd-tda',
  templateUrl: './select-mdssd-tda.component.html',
  styleUrls: ['./select-mdssd-tda.component.css']
})
export class SelectMdssdTdaComponent implements OnInit {
  @ViewChild('autoInput') input: { nativeElement: { value: string; }; };
  @Input()
  fullWidth = true;
  @Input() value: string;
  @Output() valueChange = new EventEmitter<string>();

  options: DoAnEntity[];
  filteredOptions$: Observable<DoAnEntity[]>;
  constructor(public service: DoAnService) { }

  ngOnInit(): void {
    this.service.getMany({ filter: [{ field: 'maLoaiQuyHoach', operator: '$eq', value: 'CT' }] })
      .subscribe(value => this.options = value);
  }
  onChange() {
    this.filteredOptions$ = this.getFilteredOptions(this.input.nativeElement.value);
  }

  private getFilteredOptions(value: string): Observable<DoAnEntity[]> {
    return of(value).pipe(
      map(filterString => this.filter(filterString)),
    );
  }

  private filter(value: string): DoAnEntity[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(optionValue => optionValue.tenDoAn.toLowerCase().includes(filterValue));
  }

  onSelectionChange($event: DoAnEntity) {
    this.filteredOptions$ = this.getFilteredOptions($event.tenDoAn);
    this.valueChange.emit($event.maDoAn);
    this.input.nativeElement.value = $event.tenDoAn;
  }
}
