/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BitCoinApiService } from './bit-coin-api.service';

describe('BitCoinApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BitCoinApiService]
    });
  });

  it('should ...', inject([BitCoinApiService], (service: BitCoinApiService) => {
    expect(service).toBeTruthy();
  }));
});
