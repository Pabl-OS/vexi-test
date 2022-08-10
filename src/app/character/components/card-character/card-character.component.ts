import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/Characters';

@Component({
  selector: 'app-card-character',
  templateUrl: './card-character.component.html'
})
export class CardCharacterComponent implements OnInit {
  public character!:Character;
  constructor() { }

  ngOnInit(): void {
  }

}
