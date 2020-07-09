import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUserCollectionComponent } from './form-user-collection.component';

describe('FormUserCollectionComponent', () => {
  let component: FormUserCollectionComponent;
  let fixture: ComponentFixture<FormUserCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormUserCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUserCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
