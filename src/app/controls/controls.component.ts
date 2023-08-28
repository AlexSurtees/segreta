import { Component } from '@angular/core';
import { IGameService } from 'src/services/interfaces/i-game.service';
import { GameWinner } from 'src/types/GameWinner';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent {

  constructor(private _GameService: IGameService) {}

  getGuessSubmitted(): boolean {
    return this._GameService.getGuessSubmitted()
  }

  handleGuessSubmitted(e: MouseEvent): void {
    const button = e.target as HTMLButtonElement;
    if(button.value === 'black') {
      this._GameService.setGuess(GameWinner.black)
    } else {
      this._GameService.setGuess(GameWinner.white)
    }
  }
  
  handleNextPuzzle(): void {
    this._GameService.initPuzzle()
  }

}
