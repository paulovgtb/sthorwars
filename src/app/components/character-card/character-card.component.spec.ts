import { render, screen } from '@testing-library/angular';
import { CharacterCardComponent } from './character-card.component';

describe('CharacterCardComponent', () => {
  describe('Layout', () => {
    it('has a character image', async () => {
      await render(CharacterCardComponent);
      const image = screen.getByRole('image');
      expect(image).toBeInTheDocument();
    });

    it('has correct _imageUrl', async () => {
      const {
        fixture: {
          componentInstance: { _imageUrl },
        },
      } = await render(CharacterCardComponent, {
        componentInputs: {
          id: '1',
        },
      });

      expect(_imageUrl).toBe(
        `https://starwars-visualguide.com/assets/img/characters/1.jpg`
      );
    });

    it('has character name', async () => {
      await render(CharacterCardComponent, {
        componentInputs: {
          name: 'Yoda',
        },
      });

      const characterName = screen.getByText('Yoda');
      expect(characterName).toBeInTheDocument();
    });
  });
});
