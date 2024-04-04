import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, map} from 'rxjs';
import { Pokemon, PokemonApiResult } from '../models/pokemon';
import { Item, ItemApiResponse, ItemDetail } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'https://pokeapi.co/api/v2/pokemon/';
  private itemUrl = 'https://pokeapi.co/api/v2/item/';

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<PokemonApiResult> {
    return this.http.get(this.url).pipe(
      map((res: any) => {
        return res as PokemonApiResult;
      })
    );
  }

  getNextPage(url: string): Observable<PokemonApiResult> {
    return this.http.get(url).pipe(
      map((res: any) => {
        return res as PokemonApiResult;
      })
    );
  }

  getLastPage(url: string): Observable<PokemonApiResult> {
    return this.http.get(url).pipe(
      map((res: any) => {
        return res as PokemonApiResult
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

  getItems(): Observable<ItemApiResponse>{
    return this.http.get(this.itemUrl).pipe(
      map((res: any) => {
        return res as ItemApiResponse;
      })
    );
  }

  getItemDetails(url: string): Observable<ItemDetail> {
    return this.http.get(url).pipe(
      map((res: any) => {
        return res as ItemDetail
      })
    )
  }

  getItemNextPage(url: string): Observable<ItemApiResponse> {
    return this.http.get(url).pipe(
      map((res: any) => {
        return res as ItemApiResponse;
      })
    );
  }

  getItemLastPage(url: string): Observable<ItemApiResponse> {
    return this.http.get(url).pipe(
      map((res: any) => {
        return res as ItemApiResponse
      })
    );
  }
}
