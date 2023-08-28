import { Role } from "./Role"

export class Piece {
    private _role: Role;
    private _colour: 'black' | 'white';
    private _anonymous: boolean;

    constructor(role: Role, colour: 'black' | 'white', anonymous: boolean) {
        this._role = role;
        this._colour = colour;
        this._anonymous = anonymous
    }

    public getRole() {
        return this._role
    }

    public getColour() {
        return this._colour
    }

    public getAnonymous() {
        return this._anonymous
    }

    public setAnonymous(value: boolean): void {
        this._anonymous = value;
    }
}