import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanLoanPaymentNewComponent } from './loan-loan-payment-new.component';

describe('LoanLoanPaymentNewComponent', () => {
  let component: LoanLoanPaymentNewComponent;
  let fixture: ComponentFixture<LoanLoanPaymentNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanLoanPaymentNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanLoanPaymentNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
