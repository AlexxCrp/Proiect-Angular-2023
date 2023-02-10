import { Component, Input, Output } from '@angular/core';
import { Character } from '../dropdown/character.model';
import { Planet } from '../dropdown/planet.model';

@Component({
  selector: 'app-dataview',
  templateUrl: './dataview.component.html',
  styleUrls: ['./dataview.component.css']
})
export class DataviewComponent {

  @Input() planet: Planet = null;
  @Input() character: Character = null;
  @Input() type: string = '';

  constructor()
  {
    //this.type = 'noType';
  }
}
