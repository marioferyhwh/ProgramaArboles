import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCashComponent } from './table-cash.component';

describe('TableCashComponent', () => {
  let component: TableCashComponent;
  let fixture: ComponentFixture<TableCashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableCashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
