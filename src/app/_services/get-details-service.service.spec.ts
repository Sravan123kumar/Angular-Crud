import { TestBed } from '@angular/core/testing';

import { GetDetailsServiceService } from './get-details-service.service';

describe('GetDetailsServiceService', () => {
  let service: GetDetailsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDetailsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
