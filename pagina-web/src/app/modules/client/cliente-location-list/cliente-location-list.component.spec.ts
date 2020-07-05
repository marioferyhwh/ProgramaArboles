import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteLocationListComponent } from './cliente-location-list.component';

describe('ClienteLocationListComponent', () => {
  let component: ClienteLocationListComponent;
  let fixture: ComponentFixture<ClienteLocationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteLocationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteLocationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
