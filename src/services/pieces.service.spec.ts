import { TestBed } from '@angular/core/testing';

import { PiecesService } from './pieces.service';

describe('BoardService', () => {
  let service: PiecesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PiecesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
