import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUserLevelComponent } from './form-user-level.component';

describe('FormUserLevelComponent', () => {
  let component: FormUserLevelComponent;
  let fixture: ComponentFixture<FormUserLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormUserLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUserLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
