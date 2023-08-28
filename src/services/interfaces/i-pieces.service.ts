import { Injectable } from '@angular/core';
import { Coords } from 'src/types/Coords';
import { Piece } from 'src/types/Piece';
@Injectable({
  providedIn: 'root'
})
export abstract class IPiecesService {
  abstract getPiece(coords: Coords): Piece
  abstract revealPieces(): void 
  abstract setPieces(pieces: Piece[][]): void
}
