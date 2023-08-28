import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GameWinner } from 'src/types/GameWinner';

@Injectable({
  providedIn: 'root'
})
export abstract class IGameApiService {
  abstract getGame(): Observable<{fen: string, result: GameWinner}>
  }

