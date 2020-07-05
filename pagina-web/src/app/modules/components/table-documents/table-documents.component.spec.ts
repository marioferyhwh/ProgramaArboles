import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDocumentsComponent } from './table-documents.component';

describe('TableDocumentsComponent', () => {
  let component: TableDocumentsComponent;
  let fixture: ComponentFixture<TableDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
