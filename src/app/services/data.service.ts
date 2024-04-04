import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, map} from 'rxjs';
import { Pokemon, PokemonApiResult } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<PokemonApiResult> {
    return this.http.get(this.url).pipe(
      map((res: any) => {
        return res as PokemonApiResult;
      })
    );
  }

  getPokemonDetails(url: string): Observable<Pokemon> {
    return this.http.get(url).pipe(
      map((res: any) => {
        return res as Pokemon;
      })
    );
  }
}
