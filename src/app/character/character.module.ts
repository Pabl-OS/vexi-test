import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { CharacterComponent } from './character.component';
import { CharacterListComponent } from './pages/character-list/character-list.component';
import { CardCharacterComponent } from './components/card-character/card-character.component';
import { CharacterDetailComponent } from './pages/character-detail/character-detail.component';


@NgModule({
  declarations: [
    CharacterComponent,
    CharacterListComponent,
    CardCharacterComponent,
    CharacterDetailComponent
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule
  ]
})
export class CharacterModule { }
