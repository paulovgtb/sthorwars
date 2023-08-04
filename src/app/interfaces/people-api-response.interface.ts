import { Character } from './character.interface';

export interface PeopleApiResponse {
  counter: number;
  next?: string;
  previous?: string;
  results: Character[];
}
