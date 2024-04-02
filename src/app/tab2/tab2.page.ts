import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Usuario } from '../models/usuario';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  //Asegurarse de hacer los siguientes cambios: 
  //Cambiar el json de abajo para que los datos que se muestren en pantalla sean los de que se encuentran en db.json
  //Añadir pantalla de ajustes real, con cambio de color de cosas y con switchs para no ver las fotos de perfiles de los usuarios (ejemplos)
  //Plantear una idea para la pantalla de inicio y que tenga funcionalidad real
  //Que cuando se esté en uno de los 3 apartados de la aplicación se vea reflejado en el menú lateral
  //Al pulsar en uno de los posts se abra en detalle los detalles del mismo

  cards: Usuario[] = [
    {
      avatarSrc: "assets/male-avatar.svg",
      nombre: "Carlos",
      imagenSrc: "ruta-a-la-imagen-carlos.jpg",
      mensaje: "¡Hola a todos!",
      likes: 15,
      comentarios: 8,
      nota: "Carlos es un entusiasta de los deportes."
    },
    {
      "avatarSrc": "assets/female-avatar.svg",
      "nombre": "Ana",
      "imagenSrc": "ruta-a-la-imagen-ana.jpg",
      "mensaje": "¡Feliz día!",
      "likes": 20,
      "comentarios": 10,
      "nota": "Ana es una amante de la naturaleza."
    },
    {
      "avatarSrc": "assets/male-avatar.svg",
      "nombre": "Pedro",
      "imagenSrc": "ruta-a-la-imagen-pedro.jpg",
      "mensaje": "¿Cómo están?",
      "likes": 12,
      "comentarios": 6,
      "nota": "Pedro es un apasionado de la música."
    }
  ]

  users: Usuario[] = this.cards;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getUsers().subscribe(data => {
      this.users = data;
    });
  }
}
