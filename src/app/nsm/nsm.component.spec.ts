import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NSMComponent } from './nsm.component';

describe('NSMComponent', () => {
  let component: NSMComponent;
  let fixture: ComponentFixture<NSMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NSMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NSMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
