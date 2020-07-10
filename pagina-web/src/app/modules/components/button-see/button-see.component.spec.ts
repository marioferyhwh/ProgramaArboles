import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSeeComponent } from './button-see.component';

describe('ButtonSeeComponent', () => {
  let component: ButtonSeeComponent;
  let fixture: ComponentFixture<ButtonSeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonSeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonSeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
