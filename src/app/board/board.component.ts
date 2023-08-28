import { Component, Input } from '@angular/core';
import { coordinates } from 'src/services/coordinates';
import { Piece } from 'src/types/Piece';
import { Coords } from 'src/types/Coords';
import { IGameService } from 'src/services/interfaces/i-game.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent {
  coordinates = coordinates;

  constructor(private _GameService: IGameService) { }

  ngOnInit() {
    this._GameService.initPuzzle()
  }

  getPiece(coords: Coords): Piece {
    return this._GameService.getBoard().getPiece(coords)
  }

  getSquareColour(coords: Coords): string {
    return (coords.file + coords.rank) % 2 ? 'whiteSquare' : 'blackSquare'
  }

  getPieceClass(coords: Coords): string | undefined {
    const piece = this.getPiece(coords)
    if (!piece) return undefined
    const role = piece.getAnonymous() ? 'a' : piece.getRole()
    return role + " " + piece.getColour()
  }

  getBoardBorderColour(): string {
    if (this._GameService.getGuessSubmitted()) {
      if (this._GameService.getGuessCorrect()) {
        return 'correct'
      }
      return 'incorrect'
    }
    return ''
  }

  revealPiece(event: {coords: Coords, mouseEvent: MouseEvent }) {
    this._GameService.setAnonymous(event.coords, false)
  }
}
