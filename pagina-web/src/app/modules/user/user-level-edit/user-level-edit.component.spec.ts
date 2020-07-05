import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLevelEditComponent } from './user-level-edit.component';

describe('UserLevelEditComponent', () => {
  let component: UserLevelEditComponent;
  let fixture: ComponentFixture<UserLevelEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLevelEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLevelEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
