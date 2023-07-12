import { TestBed } from '@angular/core/testing';

import { LoginApiCallService } from './login-api-call.service';

describe('LoginApiCallService', () => {
  let service: LoginApiCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginApiCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
