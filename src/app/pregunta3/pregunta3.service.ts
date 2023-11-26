import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pregunta3 } from './pregunta3';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Pregunta3Service {

  constructor(private http: HttpClient) { }

  listaCharacters(): Observable<Pregunta3[]>{
    return this.http.get<Pregunta3[]>("https://rickandmortyapi.com/api/character");
  }
}
