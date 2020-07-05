import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteTelNewComponent } from './cliente-tel-new.component';

describe('ClienteTelNewComponent', () => {
  let component: ClienteTelNewComponent;
  let fixture: ComponentFixture<ClienteTelNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteTelNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteTelNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
