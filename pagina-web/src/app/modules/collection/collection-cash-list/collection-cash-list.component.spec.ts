import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionCashListComponent } from './collection-cash-list.component';

describe('CollectionCashListComponent', () => {
  let component: CollectionCashListComponent;
  let fixture: ComponentFixture<CollectionCashListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionCashListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionCashListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
