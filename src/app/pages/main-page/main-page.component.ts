import { Observable } from 'rxjs';
import { SwapiService } from './../../services/swapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  characterList$!: Observable<any>;
  nextPage$!: Observable<any>;

  constructor(private readonly swapiService: SwapiService) {}

  ngOnInit(): void {
    this.setCharacterListStream();
    this.setNextPageStream();
  }

  fetchCharacters(api: string): void {
    this.swapiService.fetchCharacters(api);
  }

  private setCharacterListStream(): void {
    this.characterList$ = this.swapiService.getCharacterList();
  }

  private setNextPageStream(): void {
    this.nextPage$ = this.swapiService.getNextPage();
  }
}
