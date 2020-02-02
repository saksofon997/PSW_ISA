import { TestBed } from '@angular/core/testing';

import { ExaminationDeactivateService } from './examination-deactivate.service';

describe('ExaminationDeactivateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExaminationDeactivateService = TestBed.get(ExaminationDeactivateService);
    expect(service).toBeTruthy();
  });
});
