import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableUserLevelComponent } from './table-user-level.component';

describe('TableUserLevelComponent', () => {
  let component: TableUserLevelComponent;
  let fixture: ComponentFixture<TableUserLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableUserLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableUserLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
