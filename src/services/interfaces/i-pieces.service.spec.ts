import { TestBed } from '@angular/core/testing';

import { IPiecesService } from './i-pieces.service';

describe('IPiecesService', () => {
  let service: IPiecesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IPiecesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
