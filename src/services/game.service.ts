import { Injectable } from '@angular/core';
import { FenReaderService } from './fen-reader.service';
import { mockGameAPIService} from './game-api.service';
import { GameWinner } from 'src/types/GameWinner';
import { Coords } from 'src/types/Coords';
import { IGameService } from './interfaces/i-game.service';
import { PiecesService } from './pieces.service';

@Injectable({
  providedIn: 'root'
})
export class GameService implements IGameService {

  private _result: GameWinner = GameWinner.white;
  private _guessSubmitted: boolean = false;
  private _guess: GameWinner = GameWinner.white;
  private _scoreRecord: boolean[] = [];

  constructor(
    private _reader: FenReaderService,
    private _gameAPI: mockGameAPIService,
    private _pieces: PiecesService
  ) {}

  //Fire and forget/wait for completion before proceeding
  initPuzzle(): void {
    this._gameAPI.getGame()
      .subscribe(game => {
        this._result = game.result;
        this._guessSubmitted = false;
        this._pieces.setPieces(this._reader.read(game.fen))       
      }
      )
  }

  getResult(): GameWinner {
    return this._result
  }

  getGuessSubmitted(): boolean {
    return this._guessSubmitted;
  }

  setGuess(guess: GameWinner): void {
    this._guessSubmitted = true;
    this._guess = guess;
    this._scoreRecord.push(guess === this._result)
    this._pieces.revealPieces();
  }

  getBoard(): PiecesService {
    return this._pieces
  }

  getGuessCorrect(): boolean {
    return this._guess === this._result
  }

  getScore(): boolean[] {
    return this._scoreRecord;
  }

  setAnonymous(coords: Coords, value: boolean): void {
    this.getBoard().getPiece(coords).setAnonymous(value)
  }

}
