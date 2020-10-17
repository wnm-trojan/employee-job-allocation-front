import { TestBed } from '@angular/core/testing';

import { JoballocationService } from './joballocation.service';

describe('JoballocationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JoballocationService = TestBed.get(JoballocationService);
    expect(service).toBeTruthy();
  });
});
