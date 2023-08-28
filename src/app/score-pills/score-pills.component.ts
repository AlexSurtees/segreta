import { Component } from '@angular/core';
import { GameService } from 'src/services/game.service';

@Component({
  selector: 'app-score-pills',
  templateUrl: './score-pills.component.html',
  styleUrls: ['./score-pills.component.css']
})
export class ScorePillsComponent {

  constructor(private _gameService: GameService) {}

  getScore(): boolean[] {
    return this._gameService.getScore();
  }

  getPillColourClass(score: boolean) {
    if(score) return 'correct'
    return 'incorrect'
  }

}
