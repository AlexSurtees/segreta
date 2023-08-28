import { TestBed } from '@angular/core/testing';

import { FenReaderService } from './fen-reader.service';

describe('FenReaderService', () => {
  let service: FenReaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FenReaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
