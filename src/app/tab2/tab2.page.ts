import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonApiResult } from '../models/pokemon';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  //Asegurarse de hacer los siguientes cambios: 
  //Cambiar el json de abajo para que los datos que se muestren en pantalla sean los de que se encuentran en db.json
  //Añadir pantalla de ajustes real, con cambio de color de cosas y con switchs para no ver las fotos de perfiles de los usuarios (ejemplos)
  //Plantear una idea para la pantalla de inicio y que tenga funcionalidad real
  //Que cuando se esté en uno de los 3 apartados de la aplicación se vea reflejado en el menú lateral
  //Al pulsar en uno de los posts se abra en detalle los detalles del mismo

  pokemonApiResult: PokemonApiResult | undefined

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getPokemons().subscribe((data: PokemonApiResult) => {
      this.pokemonApiResult = data;
      console.log(data)
    });
  }
}
