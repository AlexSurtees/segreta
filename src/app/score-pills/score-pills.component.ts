import { Component } from '@angular/core';
import { IGameService } from 'src/services/interfaces/i-game.service';

@Component({
  selector: 'app-score-pills',
  templateUrl: './score-pills.component.html',
  styleUrls: ['./score-pills.component.css']
})
export class ScorePillsComponent {

  constructor(private _gameService: IGameService) {}

  getScore(): boolean[] {
    return this._gameService.getScore();
  }

  getPillColourClass(score: boolean) {
    if(score) return 'correct'
    return 'incorrect'
  }

}
