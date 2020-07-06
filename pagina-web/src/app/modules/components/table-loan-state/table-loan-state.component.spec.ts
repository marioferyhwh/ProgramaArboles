import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableLoanStateComponent } from './table-loan-state.component';

describe('TableLoanStateComponent', () => {
  let component: TableLoanStateComponent;
  let fixture: ComponentFixture<TableLoanStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableLoanStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableLoanStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
