import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSubCateComponent } from './new-sub-cate.component';

describe('NewSubCateComponent', () => {
  let component: NewSubCateComponent;
  let fixture: ComponentFixture<NewSubCateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSubCateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSubCateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
