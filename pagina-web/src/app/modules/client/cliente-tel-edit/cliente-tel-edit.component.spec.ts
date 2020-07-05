import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteTelEditComponent } from './cliente-tel-edit.component';

describe('ClienteTelEditComponent', () => {
  let component: ClienteTelEditComponent;
  let fixture: ComponentFixture<ClienteTelEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteTelEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteTelEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
