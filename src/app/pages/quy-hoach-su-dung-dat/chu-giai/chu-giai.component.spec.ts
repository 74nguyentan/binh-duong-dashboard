import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuGiaiComponent } from './chu-giai.component';

describe('ChuGiaiComponent', () => {
  let component: ChuGiaiComponent;
  let fixture: ComponentFixture<ChuGiaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChuGiaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuGiaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
