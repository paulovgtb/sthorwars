import { render, screen } from '@testing-library/angular';
import { CharacterCardComponent } from './character-card.component';

const mockCharacter = {
  birth_year: '19BBY',
  created: '2014-12-09T13:50:51.644000Z',
  edited: '2014-12-20T21:17:56.891000Z',
  eye_color: 'blue',
  films: [
    'https://swapi.dev/api/films/1/',
    'https://swapi.dev/api/films/2/',
    'https://swapi.dev/api/films/3/',
  ],
  gender: 'male',
  hair_color: 'blond',
  height: '172',
  homeworld: 'https://swapi.dev/api/planets/1/',
  mass: '77',
  name: 'Luke Skywalker',
  skin_color: 'fair',
  species: [],
  starships: [
    'https://swapi.dev/api/starships/12/',
    'https://swapi.dev/api/starships/22/',
  ],
  url: 'https://swapi.dev/api/people/1/',
  vehicles: [
    'https://swapi.dev/api/vehicles/14/',
    'https://swapi.dev/api/vehicles/30/',
  ],
};

const setup = async () => {
  return await render(CharacterCardComponent, {
    componentInputs: {
      character: mockCharacter,
    },
  });
};

describe('CharacterCardComponent', () => {
  describe('Layout', () => {
    it('has correct _imageUrl', async () => {
      const {
        fixture: {
          componentInstance: { _character, _imageUrl },
        },
      } = await setup();

      expect(_imageUrl).toBe(
        `https://starwars-visualguide.com/assets/img/characters/${_character.id}.jpg`
      );
    });

    it('has character name', async () => {
      const {
        fixture: {
          componentInstance: { _character },
        },
      } = await setup();

      const characterName = screen.getByTestId('title') as HTMLElement;
      expect(characterName.innerHTML).toBe(_character.name);
    });

    it('has character back title', async () => {
      const {
        fixture: {
          componentInstance: { _character },
        },
      } = await setup();

      const characterName = screen.getByTestId('back-title') as HTMLElement;
      expect(characterName.innerHTML).toBe(_character.name);
    });

    it('has character height', async () => {
      const {
        fixture: {
          componentInstance: { _character },
        },
      } = await setup();

      const characterHeight = screen.getByText(`Height: ${_character.height}`);
      expect(characterHeight).toBeInTheDocument();
    });

    it('has character mass', async () => {
      const {
        fixture: {
          componentInstance: { _character },
        },
      } = await setup();

      const characterMass = screen.getByText(`Mass: ${_character.mass}`);
      expect(characterMass).toBeInTheDocument();
    });

    it('has character hair color', async () => {
      const {
        fixture: {
          componentInstance: { _character },
        },
      } = await setup();

      const characterHairColor = screen.getByText(
        `Hair color: ${_character.hair_color}`
      );
      expect(characterHairColor).toBeInTheDocument();
    });

    it('has character skin color', async () => {
      const {
        fixture: {
          componentInstance: { _character },
        },
      } = await setup();

      const characterSkinColor = screen.getByText(
        `Skin color: ${_character.skin_color}`
      );
      expect(characterSkinColor).toBeInTheDocument();
    });

    it('has character eye color', async () => {
      const {
        fixture: {
          componentInstance: { _character },
        },
      } = await setup();

      const characterEyeColor = screen.getByText(
        `Eye color: ${_character.eye_color}`
      );
      expect(characterEyeColor).toBeInTheDocument();
    });

    it('has character birth year', async () => {
      const {
        fixture: {
          componentInstance: { _character },
        },
      } = await setup();

      const characterBirthYear = screen.getByText(
        `Birth year: ${_character.birth_year}`
      );
      expect(characterBirthYear).toBeInTheDocument();
    });

    it('has character gender', async () => {
      const {
        fixture: {
          componentInstance: { _character },
        },
      } = await setup();

      const characterGender = screen.getByText(`Gender: ${_character.gender}`);
      expect(characterGender).toBeInTheDocument();
    });
  });
});
