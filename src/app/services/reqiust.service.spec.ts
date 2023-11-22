import { TestBed } from '@angular/core/testing';

import { ReqiustService } from './reqiust.service';

describe('ReqiustService', () => {
  let service: ReqiustService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReqiustService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
