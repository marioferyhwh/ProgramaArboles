import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableExpenseDescriptionComponent } from './table-expense-description.component';

describe('TableExpenseDescriptionComponent', () => {
  let component: TableExpenseDescriptionComponent;
  let fixture: ComponentFixture<TableExpenseDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableExpenseDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableExpenseDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
