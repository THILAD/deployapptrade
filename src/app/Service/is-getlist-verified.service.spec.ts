import { TestBed } from '@angular/core/testing';

import { IsGetlistVerifiedService } from './is-getlist-verified.service';

describe('IsGetlistVerifiedService', () => {
  let service: IsGetlistVerifiedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsGetlistVerifiedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
