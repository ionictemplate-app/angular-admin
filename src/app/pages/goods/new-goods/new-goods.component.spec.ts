import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGoodsComponent } from './new-goods.component';

describe('NewGoodsComponent', () => {
  let component: NewGoodsComponent;
  let fixture: ComponentFixture<NewGoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewGoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
