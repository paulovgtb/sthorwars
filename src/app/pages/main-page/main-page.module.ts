import { LoadingComponent } from './../../components/loading/loading.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainPageComponent } from './main-page.component';
import { CharacterListComponent } from 'src/app/components/character-list/character-list.component';
import { LoadMoreButtonComponent } from 'src/app/components/load-more-button/load-more-button.component';

@NgModule({
  imports: [
    CommonModule,
    CharacterListComponent,
    LoadingComponent,
    LoadMoreButtonComponent,
  ],
  exports: [MainPageComponent],
  declarations: [MainPageComponent],
  providers: [],
})
export class MainPageModule {}
