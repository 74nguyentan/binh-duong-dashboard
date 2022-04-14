import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaTangKyThuatComponent } from './ha-tang-ky-thuat.component';

describe('HaTangKyThuatComponent', () => {
  let component: HaTangKyThuatComponent;
  let fixture: ComponentFixture<HaTangKyThuatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaTangKyThuatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaTangKyThuatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
