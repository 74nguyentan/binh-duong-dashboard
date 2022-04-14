import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuCoComponent } from './su-co.component';

describe('SuCoComponent', () => {
  let component: SuCoComponent;
  let fixture: ComponentFixture<SuCoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuCoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuCoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
