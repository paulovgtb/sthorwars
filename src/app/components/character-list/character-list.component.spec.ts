import { render, screen } from '@testing-library/angular';
import { CharacterListComponent } from './character-list.component';
import { CharacterCardComponent } from '../character-card/character-card.component';
import { CommonModule } from '@angular/common';

describe('CharacterListComponent', () => {
  describe('Layout', () => {
    it('has a list of star wars characters', async () => {
      await render(CharacterListComponent, {
        imports: [CommonModule, CharacterCardComponent],
      });
      const list = screen.getByRole('character-list');
      expect(list).toBeInTheDocument();
    });

    it.each`
      name
      ${'Luke Skywalker'}
      ${'C-3PO'}
      ${'R2-D2'}
    `(
      'has all character names given through the input characterList',
      async ({ name }) => {
        const characterArray = [
          { name: 'Luke Skywalker', id: '1' },
          { name: 'C-3PO', id: '2' },
          { name: 'R2-D2', id: '3' },
        ];

        await render(CharacterListComponent, {
          imports: [CommonModule, CharacterCardComponent],
          componentInputs: {
            characterList: characterArray,
          },
        });

        const characterName = screen.getByText(name);
        expect(characterName).toBeInTheDocument();
      }
    );

    it.each`
      name                | id
      ${'Luke Skywalker'} | ${'1'}
      ${'C-3PO'}          | ${'2'}
      ${'R2-D2'}          | ${'3'}
    `(
      'has all character images given through the input characterList',
      async ({ name, id }) => {
        const characterArray = [
          { name: 'Luke Skywalker', id: '1' },
          { name: 'C-3PO', id: '2' },
          { name: 'R2-D2', id: '3' },
        ];

        await render(CharacterListComponent, {
          imports: [CommonModule, CharacterCardComponent],
          componentInputs: {
            characterList: characterArray,
          },
        });

        const characterImage: HTMLImageElement = screen.getByAltText(
          `${name}-image`
        );
        expect(characterImage.src).toBe(
          `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
        );
      }
    );
  });
});
