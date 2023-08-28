import { Injectable } from '@angular/core';
import { Piece } from 'src/types/Piece';

@Injectable({
  providedIn: 'root'
})
export abstract class IReaderService {
  abstract read(data: any): Piece[][]
}
