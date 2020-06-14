import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableLoanPaymentComponent } from './table-loan-payment.component';

describe('TableLoanPaymentComponent', () => {
  let component: TableLoanPaymentComponent;
  let fixture: ComponentFixture<TableLoanPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableLoanPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableLoanPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
