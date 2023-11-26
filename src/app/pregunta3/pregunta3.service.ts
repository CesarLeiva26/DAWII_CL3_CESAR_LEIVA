// pregunta3.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pregunta3 } from './pregunta3';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Pregunta3Service {

  constructor(private http: HttpClient) { }

  listCharactersWithOddId(): Observable<Pregunta3[]> {
    return this.http.get<any>("https://rickandmortyapi.com/api/character")
      .pipe(
        map(response => response.results.filter((character: Pregunta3) => character.id % 2 !== 0))
      );
  }
}
