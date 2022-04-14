import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BieuDoMucDichSddComponent } from './bieu-do-muc-dich-sdd.component';

describe('BieuDoMucDichSddComponent', () => {
  let component: BieuDoMucDichSddComponent;
  let fixture: ComponentFixture<BieuDoMucDichSddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BieuDoMucDichSddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BieuDoMucDichSddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
