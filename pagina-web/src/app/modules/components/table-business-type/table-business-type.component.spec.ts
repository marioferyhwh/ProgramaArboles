import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBusinessTypeComponent } from './table-business-type.component';

describe('TableBusinessTypeComponent', () => {
  let component: TableBusinessTypeComponent;
  let fixture: ComponentFixture<TableBusinessTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableBusinessTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableBusinessTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
