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

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  private readonly _characterList = new BehaviorSubject(null);
  private readonly _nextPage = new BehaviorSubject<string>('');

  constructor(private readonly http: HttpClient) {
    this.fetchCharacters('/api/people/');
  }

  fetchCharacters(api: string): void {
    this.http
      .get(api)
      .pipe(take(1))
      .subscribe((response: any) => {
        this._nextPage.next(response.next || '');
        this._characterList.next(response.results);
      });
  }

  getCharacterList(): Observable<any> {
    return this._characterList.pipe(
      filter((characterList) => !!characterList),
      map((characterList: any) => {
        return characterList.map((character: any) => {
          return {
            ...character,
            id: character.url
              .replace('https://swapi.dev/api/people/', '')
              .replace('/', ''),
          };
        });
      }),
      scan((characterList: any, newList: any) => {
        return [...characterList, ...newList];
      }, []),
      tap((char) => console.log(char))
    );
  }

  getNextPage(): Observable<any> {
    return this._nextPage.pipe(
      map((nextPage: string): string =>
        nextPage.replace('https://swapi.dev', '')
      ),
      tap(console.log)
    );
  }
}
