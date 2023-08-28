import { Component } from '@angular/core';
import { GameService } from 'src/services/game.service';
import { IGameService } from 'src/services/interfaces/i-game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {provide: IGameService, useClass: GameService}
  ]
})
export class AppComponent {
  guessSubmitted = false;
}
