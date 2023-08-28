import { Injectable } from '@angular/core';
import { Coords } from 'src/types/Coords';
import { GameWinner } from 'src/types/GameWinner';
import { IPiecesService } from './i-pieces.service';
@Injectable({
  providedIn: 'root'
})

export abstract class IGameService {
  abstract initPuzzle(): void 
  abstract getResult(): GameWinner 
  abstract getGuessSubmitted(): boolean
  abstract setGuess(guess: GameWinner): void
  abstract getBoard(): IPiecesService 
  abstract getGuessCorrect(): boolean
  abstract getScore(): boolean[] 
  abstract setAnonymous(coords: Coords, value: boolean): void 
}
