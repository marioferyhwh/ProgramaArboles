import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessTypeEditComponent } from './business-type-edit.component';

describe('BusinessTypeEditComponent', () => {
  let component: BusinessTypeEditComponent;
  let fixture: ComponentFixture<BusinessTypeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessTypeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessTypeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
