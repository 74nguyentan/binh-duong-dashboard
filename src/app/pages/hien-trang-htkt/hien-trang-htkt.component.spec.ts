import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HienTrangHtktComponent } from './hien-trang-htkt.component';

describe('HienTrangHtktComponent', () => {
  let component: HienTrangHtktComponent;
  let fixture: ComponentFixture<HienTrangHtktComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HienTrangHtktComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HienTrangHtktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
