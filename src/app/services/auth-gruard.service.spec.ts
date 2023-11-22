import { TestBed } from '@angular/core/testing';

import { AuthGruardService } from './auth-gruard.service';

describe('AuthGruardService', () => {
  let service: AuthGruardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGruardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
