/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ClinicAdminService } from './clinic-admin.service';

describe('Service: ClinicAdmin', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClinicAdminService]
    });
  });

  it('should ...', inject([ClinicAdminService], (service: ClinicAdminService) => {
    expect(service).toBeTruthy();
  }));
});
