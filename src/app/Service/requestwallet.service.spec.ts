import { TestBed } from '@angular/core/testing';

import { RequestwalletService } from './requestwallet.service';

describe('RequestwalletService', () => {
  let service: RequestwalletService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestwalletService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
