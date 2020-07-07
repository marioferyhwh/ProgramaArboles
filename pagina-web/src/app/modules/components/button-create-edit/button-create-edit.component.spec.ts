import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCreateEditComponent } from './button-create-edit.component';

describe('ButtonCreateEditComponent', () => {
  let component: ButtonCreateEditComponent;
  let fixture: ComponentFixture<ButtonCreateEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonCreateEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
