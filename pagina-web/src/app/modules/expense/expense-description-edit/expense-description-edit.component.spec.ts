import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseDescriptionEditComponent } from './expense-description-edit.component';

describe('ExpenseDescriptionEditComponent', () => {
  let component: ExpenseDescriptionEditComponent;
  let fixture: ComponentFixture<ExpenseDescriptionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseDescriptionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseDescriptionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
