import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  filter,
  map,
  scan,
  take,
  tap,
} from 'rxjs';
import { Character } from '../interfaces/character.interface';
import { PeopleApiResponse } from '../interfaces/people-api-response.interface';

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  private readonly _characterList = new BehaviorSubject<Character[]>(null);
  private readonly _nextPage = new BehaviorSubject<string>('');
  private readonly _loading = new BehaviorSubject<boolean>(false);

  constructor(private readonly http: HttpClient) {
    this.fetchCharacters();
  }

  fetchCharacters(api = '/api/people/'): void {
    this._loading.next(true);
    this.http
      .get<PeopleApiResponse>(api)
      .pipe(take(1))
      .subscribe((response: PeopleApiResponse) => {
        this._nextPage.next(response.next || '');
        this._characterList.next(response.results);
      });
  }

  getCharacterList(): Observable<Character[]> {
    return this._characterList.pipe(
      filter((characterList: Character[]): boolean => !!characterList),
      map((characterList: Character[]) => {
        return characterList.map((character: Character) => {
          return {
            ...character,
            id: character.url
              .replace('https://swapi.dev/api/people/', '')
              .replace('/', ''),
          };
        });
      }),
      scan((characterList: Character[], newList: Character[]): Character[] => {
        return [...characterList, ...newList];
      }, []),
      tap((_) => this._loading.next(false))
    );
  }

  getNextPage(): Observable<string> {
    return this._nextPage.pipe(
      map((nextPage: string): string =>
        nextPage.replace('https://swapi.dev', '')
      )
    );
  }

  getLoading(): Observable<boolean> {
    return this._loading;
  }
}
