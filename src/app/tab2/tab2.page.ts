import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Usuario } from '../models/usuario';

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
