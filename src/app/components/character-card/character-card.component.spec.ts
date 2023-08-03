import { render, screen } from '@testing-library/angular';
import { CharacterCardComponent } from './character-card.component';

describe('CharacterCardComponent', () => {
  describe('Layout', () => {
    it('has a character image', async () => {
      await render(CharacterCardComponent);
      const image = screen.getByRole('img');
      expect(image).toBeInTheDocument();
    });

    it('image has correct alt', async () => {
      await render(CharacterCardComponent, {
        componentInputs: {
          name: 'Yoda',
        },
      });

      const image = screen.getByAltText('Yoda-image');
      expect(image).toBeInTheDocument();
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
