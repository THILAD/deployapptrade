import { TestBed } from '@angular/core/testing';

import { TicketChatlistService } from './ticket-chatlist.service';

describe('TicketChatlistService', () => {
  let service: TicketChatlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketChatlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
