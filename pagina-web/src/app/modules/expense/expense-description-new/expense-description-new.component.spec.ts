import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseDescriptionNewComponent } from './expense-description-new.component';

describe('ExpenseDescriptionNewComponent', () => {
  let component: ExpenseDescriptionNewComponent;
  let fixture: ComponentFixture<ExpenseDescriptionNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseDescriptionNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseDescriptionNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
