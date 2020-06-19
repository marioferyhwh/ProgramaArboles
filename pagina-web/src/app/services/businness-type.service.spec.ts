import { TestBed } from '@angular/core/testing';

import { BusinnessTypeService } from './businness-type.service';

describe('BusinnessTypeService', () => {
  let service: BusinnessTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusinnessTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
