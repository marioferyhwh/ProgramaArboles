import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLoanComponent } from './form-loan.component';

describe('FormLoanComponent', () => {
  let component: FormLoanComponent;
  let fixture: ComponentFixture<FormLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
