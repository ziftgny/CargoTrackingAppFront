import { TestBed } from '@angular/core/testing';

import { MusteriService } from './musteriService.service';

describe('MusteriServiceService', () => {
  let service: MusteriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusteriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
