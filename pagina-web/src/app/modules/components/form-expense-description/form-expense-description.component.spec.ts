import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormExpenseDescriptionComponent } from './form-expense-description.component';

describe('FormExpenseDescriptionComponent', () => {
  let component: FormExpenseDescriptionComponent;
  let fixture: ComponentFixture<FormExpenseDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormExpenseDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormExpenseDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
