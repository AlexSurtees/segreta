import { TestBed } from '@angular/core/testing';

import { IReaderService } from './i-reader.service';

describe('IReaderService', () => {
  let service: IReaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IReaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
