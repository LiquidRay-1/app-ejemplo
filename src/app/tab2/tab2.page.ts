import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonApiResult } from '../models/pokemon';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page implements OnInit{

  pokemonApiResult: PokemonApiResult | undefined

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getPokemons().subscribe((data: PokemonApiResult) => {
      this.pokemonApiResult = data;
      this.pokemonApiResult.results.forEach(pokemon => {
        this.dataService.getPokemonDetails(pokemon.url).subscribe((details: Pokemon) => {
          pokemon.sprites = details.sprites;
        });
      });
    });
  }

  nextPage(){
    console.log("Se ha pulsado el botón de pasar página")
    if (this.pokemonApiResult?.next) {
      this.dataService.getNextPage(this.pokemonApiResult.next).subscribe((data: PokemonApiResult) => {
        this.pokemonApiResult = data;
        this.pokemonApiResult.results.forEach(pokemon => {
          this.dataService.getPokemonDetails(pokemon.url).subscribe((details: Pokemon) => {
            pokemon.sprites = details.sprites;
          });
        });
      });
    } else {
      console.log("No hay más páginas para mostrar");
    }
  }

  previousPage(){
    console.log("Se ha pulsado el botoón de volver página")
    if (this.pokemonApiResult?.previous) {
      this.dataService.getLastPage(this.pokemonApiResult.previous).subscribe((data: PokemonApiResult) => {
        this.pokemonApiResult = data;
        this.pokemonApiResult.results.forEach(pokemon => {
          this.dataService.getPokemonDetails(pokemon.url).subscribe((details: Pokemon) => {
            pokemon.sprites = details.sprites;
          });
        });
      });
    } else {
      console.log("No hay páginas anteriores")
    }
  }

}
