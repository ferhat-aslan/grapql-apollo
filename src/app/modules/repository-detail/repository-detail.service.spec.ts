import { TestBed } from '@angular/core/testing';

import { RepositoryDetailService } from './repository-detail.service';

describe('RepositoryDetailService', () => {
  let service: RepositoryDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepositoryDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
