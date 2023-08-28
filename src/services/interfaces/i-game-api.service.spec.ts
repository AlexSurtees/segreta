import { TestBed } from '@angular/core/testing';

import { IGameApiService } from './i-game-api.service';

describe('IGameApiService', () => {
  let service: IGameApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IGameApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
