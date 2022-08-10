import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/interfaces/Characters';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html'
})
export class CharacterDetailComponent implements OnInit {
  public character!:Character;
  constructor(private _characterService:CharactersService,
              private _route:ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this._route.snapshot.paramMap;
    this.getCharacterById(routeParams.get('id')?.toString()  ?? '');
  }

  private getCharacterById(id:string){
   this._characterService.getCharactersById(id)
   .subscribe({
    next:response => {
      this.character = response;
    },error:error =>{
      console.error(error)
    }
   })
  }

}
