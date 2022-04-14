import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuDungDatComponent } from './su-dung-dat.component';

describe('SuDungDatComponent', () => {
  let component: SuDungDatComponent;
  let fixture: ComponentFixture<SuDungDatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuDungDatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuDungDatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
