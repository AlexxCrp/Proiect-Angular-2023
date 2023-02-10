import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Character } from './character.model';
import { Planet } from './planet.model';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  dropdownElements: {name: string, id: number}[] = [];
  @Input() type: string;
  @Output() planetData = new EventEmitter<Planet>();
  @Output() characterData = new EventEmitter<Character>();

  constructor(private http: HttpClient) {}

  constructDropdown(){
    if (this.type === 'Planet' && this.dropdownElements.length === 0){
      this.dropdownElements.push({name: 'Tatooine', id : 1});
      this.dropdownElements.push({name: 'Alderaan', id: 2});
      this.dropdownElements.push({name: 'Yavin IV', id: 3});
      this.dropdownElements.push({name: 'Hoth', id: 4});
      this.dropdownElements.push({name: 'Dagobah', id: 5});
      this.dropdownElements.push({name: 'Bespin', id: 6});
      this.dropdownElements.push({name: 'Endor', id: 7});
      this.dropdownElements.push({name: 'Naboo', id: 8});
      this.dropdownElements.push({name: 'Coruscant', id: 9});
      this.dropdownElements.push({name: 'Kamino', id: 10});
    }
    else if(this.type === 'Character' && this.dropdownElements.length === 0){
      this.dropdownElements.push({name: 'Luke Skywalker', id: 1});
      this.dropdownElements.push({name: 'C-3PO', id: 2});
      this.dropdownElements.push({name: 'R2-D2', id: 3});
      this.dropdownElements.push({name: 'Darth Vader', id: 4});
      this.dropdownElements.push({name: 'Leia Organa', id: 5});
      this.dropdownElements.push({name: 'Owen Lars', id: 6});
      this.dropdownElements.push({name: 'Yoda', id: 20}); //20
      this.dropdownElements.push({name:'Chewbacca', id: 13}); //13
      this.dropdownElements.push({name: 'Han Solo', id: 14}); //14
      this.dropdownElements.push({name: 'Obi-Wan Kenobi', id: 10});
    }
  }

  getPlanet(id: number){
    var planet: Planet = {name: '', rotationPeriod: '', orbitalPeriod: '', diameter: '', climate: '', population: ''};
    this.http.get(`https://swapi.dev/api/planets/${id}`)
      .subscribe(data => {
        planet.name = data['name'],
        planet.climate = data['climate'],
        planet.diameter = data['diameter'],
        planet.orbitalPeriod = data['orbital_period'],
        planet.population = data['population'],
        planet.rotationPeriod = data['rotation_period']
      });
    return planet;
  }

  getCharacter(id: number){
    var character: Character = {name: '', height: '', eyeColor: '', birthYear: '', gender: ''};
    this.http.get(`https://swapi.dev/api/people/${id}`)
      .subscribe(data => {
        character.name = data['name'],
        character.height = data['height'],
        character.gender = data['gender'],
        character.eyeColor = data['eye_color'],
        character.birthYear = data['birth_year']
      });
    return character;
  }

  sendDataToDataView(id: number){
    if(this.type === 'Character'){
      var character = this.getCharacter(id);
      this.characterData.emit(character);
    }
    else if(this.type ==='Planet'){
      var planet = this.getPlanet(id);
      this.planetData.emit(planet);
    }
  }
}
