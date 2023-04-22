import { TestBed } from '@angular/core/testing';

import { IstraderSeriviceService } from './istrader-serivice.service';

describe('IstraderSeriviceService', () => {
  let service: IstraderSeriviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IstraderSeriviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
