import { TestBed } from '@angular/core/testing';

import { BacklogApiService } from './backlog-api.service';

describe('BacklogApiService', () => {
  let service: BacklogApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BacklogApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
