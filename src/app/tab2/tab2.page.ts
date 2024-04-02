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
