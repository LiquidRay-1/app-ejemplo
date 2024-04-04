import { Component, OnInit } from '@angular/core';
import { Item, ItemApiResponse, ItemDetail, Sprite } from '../models/item';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  itemApiResponse: ItemApiResponse | undefined;
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
      this.dataService.getItems().subscribe((data: ItemApiResponse) => {
        this.itemApiResponse = data;
        this.itemApiResponse.results.forEach(item => {
          this.dataService.getItemDetails(item.url).subscribe((details: ItemDetail) => {
            item.sprites = details.sprites;
          })
        })
      })
  }

  nextPage(){
    console.log("Se ha pulsado el botón de pasar página")
    if (this.itemApiResponse?.next) {
      this.dataService.getItemNextPage(this.itemApiResponse.next).subscribe((data: ItemApiResponse) => {
        this.itemApiResponse = data;
        this.itemApiResponse.results.forEach(item => {
          this.dataService.getItemDetails(item.url).subscribe((details: ItemDetail) => {
            item.sprites = details.sprites;
          });
        });
      });
    } else {
      console.log("No hay más páginas para mostrar");
    }
  }

  previousPage(){
    console.log("Se ha pulsado el botoón de volver página")
    if (this.itemApiResponse?.previous) {
      this.dataService.getItemLastPage(this.itemApiResponse.previous).subscribe((data: ItemApiResponse) => {
        this.itemApiResponse = data;
        this.itemApiResponse.results.forEach(item => {
          this.dataService.getItemDetails(item.url).subscribe((details: ItemDetail) => {
            item.sprites = details.sprites;
          });
        });
      });
    } else {
      console.log("No hay páginas anteriores")
    }
  }
}
