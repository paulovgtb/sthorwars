import { SwapiService } from './../../services/swapi.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  characterList: any;

  constructor(private readonly swapiService: SwapiService) {
    this.swapiService.getCharacterList().subscribe((res: any) => {
      this.characterList = res.results.map((character: any, i: number) => {
        return { name: character.name, id: (i + 1).toString() };
      });
    });
  }
}
