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

  items: Item[] = [
    {
    nombre: 'Rueda',
    clase: 'Epic',
    modelo: 'Torino',
    precio: 42,
    oferta: false,
    cantidad: 0,
    stock: 9,
    image: 'assets/img/skin.jpg',
  },
  {
    nombre: 'Skin',
    clase: 'Legend',
    modelo: 'BMW',
    precio: 76,
    oferta: false,
    cantidad: 0,
    stock: 7,
    image: 'assets/img/skin.jpg',
  },
  {
    nombre: 'Accesorio',
    clase: 'Epic',
    modelo: 'Global',
    precio: 120,
    oferta: true,
    cantidad: 0,
    stock: 19,
    image: 'assets/img/skin.jpg',
  },
  {
    nombre: 'Bandera',
    clase: 'Epic',
    modelo: 'Argentina',
    precio: 42,
    oferta: true,
    cantidad: 0,
    stock: 5,
    image: 'assets/img/skin.jpg',
  },
  ]
  constructor(
    private carrito: ItemsCarritoService,
    private itemsDataService: ItemDataService,) { }// se debe agregar el inject del modulo -> private: itemsDataService: ItemDataService,

  ngOnInit(): void {
 // this.itemsDataService.getAll()//// llama  a la funcion getAll de item-data-service.ts
 //.subscribe(items => this.items = items); //Se tiene que subscribir ya que el data nos trae un observable desde la Api consumida
 
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