import { TestBed } from '@angular/core/testing';

import { MybdproductsService } from './mybdproducts.service';

describe('MybdproductsService', () => {
  let service: MybdproductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MybdproductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
