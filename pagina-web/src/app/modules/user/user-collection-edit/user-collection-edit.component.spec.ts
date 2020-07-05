import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCollectionEditComponent } from './user-collection-edit.component';

describe('UserCollectionEditComponent', () => {
  let component: UserCollectionEditComponent;
  let fixture: ComponentFixture<UserCollectionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCollectionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCollectionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
