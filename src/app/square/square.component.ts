import { Component, Input } from '@angular/core';
import { Coords } from 'src/types/Coords';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent {
@Input() pieceClass: string | undefined;
@Input() squareColour: string | undefined;
@Input() coord!: Coords;

@Output() clickCoordinates = new EventEmitter<{coords: Coords, mouseEvent: MouseEvent}>();

handleClick(event: MouseEvent): void {
 this.clickCoordinates.emit({
  coords: this.coord,
  mouseEvent: event
 })
}

}