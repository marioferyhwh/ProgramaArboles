import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLoanStateComponent } from './form-loan-state.component';

describe('FormLoanStateComponent', () => {
  let component: FormLoanStateComponent;
  let fixture: ComponentFixture<FormLoanStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormLoanStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLoanStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
