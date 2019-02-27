import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RSMComponent } from './rsm.component';

describe('RSMComponent', () => {
  let component: RSMComponent;
  let fixture: ComponentFixture<RSMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RSMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RSMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
