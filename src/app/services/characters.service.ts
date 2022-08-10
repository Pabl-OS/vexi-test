import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Character, Characters } from '../interfaces/Characters';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private baseUrl:string = environment.BASE_API;
  constructor(private _http:HttpClient) { }

  public getCharacters():Observable<Characters>{
    return  this._http.get<Characters>(`${this.baseUrl}/character`)
  }
  
  public getCharactersById(id:string):Observable<Character>{
    return  this._http.get<Character>(`${this.baseUrl}/character/${id}`)
  }
}
