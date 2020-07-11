import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonRefrestComponent } from './button-refrest.component';

describe('ButtonRefrestComponent', () => {
  let component: ButtonRefrestComponent;
  let fixture: ComponentFixture<ButtonRefrestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonRefrestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonRefrestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
