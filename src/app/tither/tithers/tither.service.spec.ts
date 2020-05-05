import { TestBed } from '@angular/core/testing';

import { TitherService } from './tither.service';

describe('TitherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TitherService = TestBed.get(TitherService);
    expect(service).toBeTruthy();
  });
});
