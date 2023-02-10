import { Component } from '@angular/core';
import { Character } from '../dropdown/character.model';
import { Planet } from '../dropdown/planet.model';

@Component({
  selector: 'app-star-wars',
  templateUrl: './star-wars.component.html',
  styleUrls: ['./star-wars.component.css']
})
export class StarWarsComponent {
  Type1 = 'Planet';
  Type2 = 'Character';

  planetToSend: Planet = null;
  characterToSend: Character = null;

  saveCharacter(character: Character)
  {
    this.characterToSend = character;
    console.log(character.name);
  }
  savePlanet(planet: Planet)
  {
    this.planetToSend = planet;
  }
}
