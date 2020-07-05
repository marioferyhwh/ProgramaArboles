import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseDescriptionListComponent } from './expense-description-list.component';

describe('ExpenseDescriptionListComponent', () => {
  let component: ExpenseDescriptionListComponent;
  let fixture: ComponentFixture<ExpenseDescriptionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseDescriptionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseDescriptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
