import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanLoanStateListComponent } from './loan-loan-state-list.component';

describe('LoanLoanStateListComponent', () => {
  let component: LoanLoanStateListComponent;
  let fixture: ComponentFixture<LoanLoanStateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanLoanStateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanLoanStateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
