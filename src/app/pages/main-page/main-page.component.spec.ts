import { render, screen } from '@testing-library/angular';
import { MainPageComponent } from './main-page.component';

describe('MainPageComponent', () => {
  describe('Layout', () => {
    it('has star wars logo', async () => {
      await render(MainPageComponent);
      const logo = screen.getByRole('img');
      expect(logo).toBeInTheDocument();
    });
  });
});
