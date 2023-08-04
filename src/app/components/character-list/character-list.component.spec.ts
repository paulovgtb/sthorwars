import { render, screen } from '@testing-library/angular';
import { CharacterListComponent } from './character-list.component';
import { CharacterCardComponent } from '../character-card/character-card.component';
import { CommonModule } from '@angular/common';

describe('CharacterListComponent', () => {
  describe('Layout', () => {
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
  });
});
