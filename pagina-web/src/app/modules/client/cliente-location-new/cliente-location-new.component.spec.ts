import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteLocationNewComponent } from './cliente-location-new.component';

describe('ClienteLocationNewComponent', () => {
  let component: ClienteLocationNewComponent;
  let fixture: ComponentFixture<ClienteLocationNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteLocationNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteLocationNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
