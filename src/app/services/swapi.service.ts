import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  constructor(private readonly http: HttpClient) {}

  getCharacterList() {
    return this.http.get('/api/people/');
  }
}
