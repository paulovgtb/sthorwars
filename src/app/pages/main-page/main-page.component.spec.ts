import { SwapiService } from './../../services/swapi.service';
import { CharacterListComponent } from './../../components/character-list/character-list.component';
import { render, screen } from '@testing-library/angular';
import { MainPageComponent } from './main-page.component';
import { HttpClientModule } from '@angular/common/http';

describe('MainPageComponent', () => {
  describe('Layout', () => {
    it('has star wars logo', async () => {
      await render(MainPageComponent, {
        providers: [SwapiService],
        imports: [CharacterListComponent, HttpClientModule],
      });
      const logo = screen.getByRole('logo');
      expect(logo).toBeInTheDocument();
    });
  });
});
