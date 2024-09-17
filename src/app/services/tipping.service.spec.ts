import { TestBed } from '@angular/core/testing';

import { TippingService } from './tipping.service';

describe('TippingService', () => {
  let service: TippingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TippingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
