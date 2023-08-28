import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { SquareComponent } from './square/square.component';
import { ControlsComponent } from './controls/controls.component';
import { ScorePillsComponent } from './score-pills/score-pills.component';
import { PiecesService } from 'src/services/pieces.service';
import { IPiecesService } from 'src/services/interfaces/i-pieces.service';
import { IReaderService } from 'src/services/interfaces/i-reader.service';
import { FenReaderService } from 'src/services/fen-reader.service';
import { IGameApiService } from 'src/services/interfaces/i-game-api.service';
import { mockGameAPIService } from 'src/services/game-api.service';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    SquareComponent,
    ControlsComponent,
    ScorePillsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide: IPiecesService, useClass: PiecesService},
    {provide: IReaderService, useClass: FenReaderService},
    {provide: IGameApiService, useClass: mockGameAPIService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
