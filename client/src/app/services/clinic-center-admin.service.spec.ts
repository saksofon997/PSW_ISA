/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ClinicCenterAdminService } from './clinic-center-admin.service';

describe('Service: ClinicCenterAdmin', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClinicCenterAdminService]
    });
  });

  it('should ...', inject([ClinicCenterAdminService], (service: ClinicCenterAdminService) => {
    expect(service).toBeTruthy();
  }));
});
