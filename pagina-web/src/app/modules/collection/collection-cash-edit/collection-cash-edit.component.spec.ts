import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionCashEditComponent } from './collection-cash-edit.component';

describe('CollectionCashEditComponent', () => {
  let component: CollectionCashEditComponent;
  let fixture: ComponentFixture<CollectionCashEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionCashEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionCashEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
