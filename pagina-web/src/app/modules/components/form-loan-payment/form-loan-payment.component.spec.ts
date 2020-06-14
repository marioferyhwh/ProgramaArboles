import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLoanPaymentComponent } from './form-loan-payment.component';

describe('FormLoanPaymentComponent', () => {
  let component: FormLoanPaymentComponent;
  let fixture: ComponentFixture<FormLoanPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormLoanPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLoanPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
