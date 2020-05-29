import { TestBed } from '@angular/core/testing';

import { TitheService } from './tithe.service';

describe('TitheService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TitheService = TestBed.get(TitheService);
    expect(service).toBeTruthy();
  });
});
