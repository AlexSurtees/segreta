import { Component } from '@angular/core';
import { GameService } from 'src/services/game.service';
import { GameWinner } from 'src/types/GameWinner';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent {

  constructor(private _GameService: GameService) {}

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
