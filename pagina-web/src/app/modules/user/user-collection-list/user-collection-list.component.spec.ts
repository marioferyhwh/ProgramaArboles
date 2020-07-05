import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCollectionListComponent } from './user-collection-list.component';

describe('UserCollectionListComponent', () => {
  let component: UserCollectionListComponent;
  let fixture: ComponentFixture<UserCollectionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCollectionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCollectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
