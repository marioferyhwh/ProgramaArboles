import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBusinessTypeComponent } from './form-business-type.component';

describe('FormBusinessTypeComponent', () => {
  let component: FormBusinessTypeComponent;
  let fixture: ComponentFixture<FormBusinessTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBusinessTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBusinessTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
