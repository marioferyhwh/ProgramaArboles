import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCollectionNewComponent } from './user-collection-new.component';

describe('UserCollectionNewComponent', () => {
  let component: UserCollectionNewComponent;
  let fixture: ComponentFixture<UserCollectionNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCollectionNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCollectionNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
