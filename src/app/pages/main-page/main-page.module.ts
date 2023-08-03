import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainPageComponent } from './main-page.component';
import { CharacterListComponent } from 'src/app/components/character-list/character-list.component';

@NgModule({
  imports: [CommonModule, CharacterListComponent],
  exports: [MainPageComponent],
  declarations: [MainPageComponent],
  providers: [],
})
export class MainPageModule {}
