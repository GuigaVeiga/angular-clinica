import { TestBed } from '@angular/core/testing';

import { ContributorsServiceService } from './contributors-service.service';

describe('ContributorsServiceService', () => {
  let service: ContributorsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContributorsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
