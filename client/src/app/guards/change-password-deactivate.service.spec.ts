import { TestBed } from '@angular/core/testing';

import { ChangePasswordDeactivateService } from './change-password-deactivate.service';

describe('ChangePasswordDeactivateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChangePasswordDeactivateService = TestBed.get(ChangePasswordDeactivateService);
    expect(service).toBeTruthy();
  });
});
