import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss'],
})
export class CharacterCardComponent {
  @Input() name!: string;
  @Input() set id(imageId: string) {
    this._imageUrl = `https://starwars-visualguide.com/assets/img/characters/${imageId}.jpg`;
  }

  _imageUrl: string = '';
}
