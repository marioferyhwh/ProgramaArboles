import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionCashNewComponent } from './collection-cash-new.component';

describe('CollectionCashNewComponent', () => {
  let component: CollectionCashNewComponent;
  let fixture: ComponentFixture<CollectionCashNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionCashNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionCashNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
