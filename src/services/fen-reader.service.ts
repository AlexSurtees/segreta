import { Injectable } from '@angular/core';
import { Piece } from "src/types/Piece";
import { Role } from "src/types/Role";
import { coordinates } from "src/services/coordinates";

@Injectable()
export class FenReaderService {

    public read(fen: string): Piece[][] {

        let boardGrid: Piece[][] = [...Array(coordinates.files.length)].map(_ => Array(coordinates.ranks.length));
        let rank = 7,
            file = 0;
        for (const c of fen) {
            switch (c) {
                case ' ':
                case '[':
                    return boardGrid;
                case '/':
                    --rank;
                    if (rank < 0) return boardGrid;
                    file = 0;
                    break;
                default: {
                    const nb = c.charCodeAt(0);
                    if (nb < 57) file += nb - 48;
                    else {
                        const role = c.toLowerCase() as Role;
                        boardGrid[file][rank] = new Piece(role, c === role ? 'black' : 'white', true)
                        ++file;
                    }
                }
            }
        }
        return boardGrid;
    }
};

