import { Injectable } from '@angular/core';
import { Piece } from 'src/types/Piece';
import { Coords } from 'src/types/Coords';

@Injectable({
  providedIn: 'root'
})
export class PiecesService {

  private _pieces: Piece[][] = [];

  constructor() { }

  getPiece(coords: Coords): Piece {
    return this._pieces[coords.file][coords.rank]
  }

  revealPieces(): void {
    this._pieces.map((value) => {
      value.map((piece) => {
        piece.setAnonymous(false)
      })
    })
  }

  setPieces(pieces: Piece[][]) {
    this._pieces = pieces
  }
}
