import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanLoanPaymentListComponent } from './loan-loan-payment-list.component';

describe('LoanLoanPaymentListComponent', () => {
  let component: LoanLoanPaymentListComponent;
  let fixture: ComponentFixture<LoanLoanPaymentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanLoanPaymentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanLoanPaymentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
