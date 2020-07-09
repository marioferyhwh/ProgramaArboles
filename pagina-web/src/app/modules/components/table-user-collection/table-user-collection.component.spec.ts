import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableUserCollectionComponent } from './table-user-collection.component';

describe('TableUserCollectionComponent', () => {
  let component: TableUserCollectionComponent;
  let fixture: ComponentFixture<TableUserCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableUserCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableUserCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
