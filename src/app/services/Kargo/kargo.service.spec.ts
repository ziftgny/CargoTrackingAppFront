import { TestBed } from '@angular/core/testing';

import { KargoService } from './kargo.service';

describe('KargoService', () => {
  let service: KargoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KargoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
