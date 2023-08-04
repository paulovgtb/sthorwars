import { Observable } from 'rxjs';
import { SwapiService } from './../../services/swapi.service';
import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/character.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  characterList$: Observable<Character[]>;
  nextPage$: Observable<string>;
  loading$: Observable<boolean>;

  constructor(private readonly swapiService: SwapiService) {}

  ngOnInit(): void {
    this.swapiServiceStreams();
  }

  fetchCharacters(api?: string): void {
    this.swapiService.fetchCharacters(api);
  }

  private swapiServiceStreams(): void {
    this.characterList$ = this.swapiService.getCharacterList();
    this.nextPage$ = this.swapiService.getNextPage();
    this.loading$ = this.swapiService.getLoading();
  }
}
