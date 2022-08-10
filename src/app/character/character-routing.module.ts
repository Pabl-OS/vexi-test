import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './character.component';
import { CharacterDetailComponent } from './pages/character-detail/character-detail.component';
import { CharacterListComponent } from './pages/character-list/character-list.component';

const routes: Routes = [
  {
    path:'',
    component:CharacterComponent,
    children:
    [
      {
        path:'listado',
        component:CharacterListComponent
      },
      {
        path:'detalle/:id',
        component:CharacterDetailComponent
      },
      {
        path:'**',
        redirectTo:'listado'
      }
    ] 
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule { }
