import { Component, OnInit } from '@angular/core';
import { Characters } from 'src/app/interfaces/Characters';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html'
})
export class CharacterListComponent implements OnInit {
  public characters!:Characters;
  constructor(private _characterService:CharactersService) { }

  ngOnInit(): void {
    this.getAllCharacters();
  }

  private getAllCharacters(){
    this._characterService.getCharacters()
    .subscribe({
      next:response => {
        this.characters = response;
        console.log(response);
      },error:error =>{
        console.error(error)
      }
    })
  }

}
