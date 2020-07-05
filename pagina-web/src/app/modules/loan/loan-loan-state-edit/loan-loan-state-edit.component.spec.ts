import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanLoanStateEditComponent } from './loan-loan-state-edit.component';

describe('LoanLoanStateEditComponent', () => {
  let component: LoanLoanStateEditComponent;
  let fixture: ComponentFixture<LoanLoanStateEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanLoanStateEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanLoanStateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
