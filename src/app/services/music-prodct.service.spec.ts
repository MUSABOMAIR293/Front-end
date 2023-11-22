import { TestBed } from '@angular/core/testing';

import { MusicProdctService } from './music-prodct.service';

describe('MusicProdctService', () => {
  let service: MusicProdctService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicProdctService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
