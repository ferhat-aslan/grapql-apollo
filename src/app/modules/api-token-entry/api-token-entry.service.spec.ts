import { TestBed } from '@angular/core/testing';

import { ApiTokenEntryService } from './api-token-entry.service';

describe('ApiTokenEntryService', () => {
  let service: ApiTokenEntryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiTokenEntryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
