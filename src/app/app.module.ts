import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { SquareComponent } from './square/square.component';
import { ControlsComponent } from './controls/controls.component';
import { ScorePillsComponent } from './score-pills/score-pills.component';
import { IGameComponent } from './i-game/i-game.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    SquareComponent,
    ControlsComponent,
    ScorePillsComponent,
    IGameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
