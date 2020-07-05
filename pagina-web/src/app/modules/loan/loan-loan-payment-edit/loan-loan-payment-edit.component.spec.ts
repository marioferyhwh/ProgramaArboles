import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanLoanPaymentEditComponent } from './loan-loan-payment-edit.component';

describe('LoanLoanPaymentEditComponent', () => {
  let component: LoanLoanPaymentEditComponent;
  let fixture: ComponentFixture<LoanLoanPaymentEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanLoanPaymentEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanLoanPaymentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
