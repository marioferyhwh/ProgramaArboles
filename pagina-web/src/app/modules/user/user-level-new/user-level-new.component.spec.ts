import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLevelNewComponent } from './user-level-new.component';

describe('UserLevelNewComponent', () => {
  let component: UserLevelNewComponent;
  let fixture: ComponentFixture<UserLevelNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLevelNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLevelNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
