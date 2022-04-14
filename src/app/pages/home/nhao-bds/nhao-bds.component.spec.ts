import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NhaoBdsComponent } from './nhao-bds.component';

describe('NhaoBdsComponent', () => {
  let component: NhaoBdsComponent;
  let fixture: ComponentFixture<NhaoBdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhaoBdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhaoBdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
