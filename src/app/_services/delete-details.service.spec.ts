import { TestBed } from '@angular/core/testing';

import { DeleteDetailsService } from './delete-details.service';

describe('DeleteDetailsService', () => {
  let service: DeleteDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
