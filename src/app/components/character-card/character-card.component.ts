import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Character } from 'src/app/interfaces/character.interface';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss'],
})
export class CharacterCardComponent {
  @Input() set character(characterInfo: Character) {
    this._character =
      characterInfo.name === 'Obi-Wan Kenobi'
        ? this.useTheForce(characterInfo)
        : characterInfo;
    this._imageUrl = `https://starwars-visualguide.com/assets/img/characters/${characterInfo.id}.jpg`;
  }

  _character: Character;
  _imageUrl: string = '';

  private useTheForce(obiWanInfo: Character): Character {
    return {
      ...obiWanInfo,
      height: 'This',
      mass: 'Is',
      hair_color: 'The',
      skin_color: 'Dev',
      eye_color: "You're",
      birth_year: 'Looking',
      gender: 'For',
    };
  }
}
