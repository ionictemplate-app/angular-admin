import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCateComponent } from './sub-cate.component';

describe('SubCateComponent', () => {
  let component: SubCateComponent;
  let fixture: ComponentFixture<SubCateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubCateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
