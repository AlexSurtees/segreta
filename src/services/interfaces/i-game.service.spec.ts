import { TestBed } from '@angular/core/testing';

import { IGameService } from './i-game.service';

describe('IGameService', () => {
  let service: IGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
