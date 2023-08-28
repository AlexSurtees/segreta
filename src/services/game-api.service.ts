import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { GameWinner } from 'src/types/GameWinner';

@Injectable()
export class mockGameAPIService {
    getGame(): Observable<{fen: string, result: GameWinner}> {
        return of({
            fen: 'r1bk3r/p2pBpNp/n4n2/1p1NP2P/6P1/3P4/P1P1K3/q5b1 b - - 1 23',
            result: GameWinner.white
        })
      }

} 