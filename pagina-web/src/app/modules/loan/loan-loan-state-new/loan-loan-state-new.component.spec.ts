import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanLoanStateNewComponent } from './loan-loan-state-new.component';

describe('LoanLoanStateNewComponent', () => {
  let component: LoanLoanStateNewComponent;
  let fixture: ComponentFixture<LoanLoanStateNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanLoanStateNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanLoanStateNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
