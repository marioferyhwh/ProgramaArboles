import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteLocationEditComponent } from './cliente-location-edit.component';

describe('ClienteLocationEditComponent', () => {
  let component: ClienteLocationEditComponent;
  let fixture: ComponentFixture<ClienteLocationEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteLocationEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteLocationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
