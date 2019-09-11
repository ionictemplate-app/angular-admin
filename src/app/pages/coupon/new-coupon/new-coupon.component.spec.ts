import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCouponComponent } from './new-coupon.component';

describe('NewCouponComponent', () => {
  let component: NewCouponComponent;
  let fixture: ComponentFixture<NewCouponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCouponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
