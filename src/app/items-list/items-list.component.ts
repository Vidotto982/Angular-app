import { ItemDataService } from './../item-data.service';
import { ItemsCarritoService } from './../items-carrito.service';
import { Component, OnInit } from '@angular/core';

import { Item } from './Item';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  //[x: string]: any;

  items: Item[] = []
  constructor(
    private carrito: ItemsCarritoService,
    private itemsDataService: ItemDataService,) { }// se debe agregar el inject del modulo -> private: itemsDataService: ItemDataService,

  ngOnInit(): void {
  this.itemsDataService.getAll()//// llama  a la funcion getAll de item-data-service.ts
 .subscribe(items => this.items = items); //Se tiene que subscribir ya que el data nos trae un observable desde la Api consumida
 
  }
  maxCantidad(m: String) {
    alert(m);
  }
agregarAlCarrito(item: Item): void{
  this.carrito.agregarAlCarrito(item);
  item.stock -= item.cantidad;
  item.cantidad=0;
}
}