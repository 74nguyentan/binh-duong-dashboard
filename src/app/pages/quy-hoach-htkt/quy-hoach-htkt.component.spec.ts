import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuyHoachHtktComponent } from './quy-hoach-htkt.component';

describe('QuyHoachHtktComponent', () => {
  let component: QuyHoachHtktComponent;
  let fixture: ComponentFixture<QuyHoachHtktComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuyHoachHtktComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuyHoachHtktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
