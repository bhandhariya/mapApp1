import { TestBed } from '@angular/core/testing';

import { CordinatesService } from './cordinates.service';

describe('CordinatesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CordinatesService = TestBed.get(CordinatesService);
    expect(service).toBeTruthy();
  });
});
