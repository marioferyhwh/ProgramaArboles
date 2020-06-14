import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableExpenseComponent } from './table-expense.component';

describe('TableExpenseComponent', () => {
  let component: TableExpenseComponent;
  let fixture: ComponentFixture<TableExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
