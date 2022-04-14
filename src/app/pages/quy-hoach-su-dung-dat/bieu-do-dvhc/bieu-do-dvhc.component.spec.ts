import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BieuDoDvhcComponent } from './bieu-do-dvhc.component';

describe('BieuDoDvhcComponent', () => {
  let component: BieuDoDvhcComponent;
  let fixture: ComponentFixture<BieuDoDvhcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BieuDoDvhcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BieuDoDvhcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
