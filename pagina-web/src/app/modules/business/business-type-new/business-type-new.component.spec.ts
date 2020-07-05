import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessTypeNewComponent } from './business-type-new.component';

describe('BusinessTypeNewComponent', () => {
  let component: BusinessTypeNewComponent;
  let fixture: ComponentFixture<BusinessTypeNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessTypeNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessTypeNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
