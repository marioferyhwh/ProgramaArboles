import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTypeaComponent } from './table-typea.component';

describe('TableTypeaComponent', () => {
  let component: TableTypeaComponent;
  let fixture: ComponentFixture<TableTypeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableTypeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTypeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
