import { TestBed } from '@angular/core/testing';

import { ClinicalCenterService } from './clinical-center.service';

describe('ClinicalCenterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClinicalCenterService = TestBed.get(ClinicalCenterService);
    expect(service).toBeTruthy();
  });
});
