import { Component, OnInit } from '@angular/core';
import { Item } from './Item';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  items: Item[] = [{
    nombre: 'Rueda algo',
    clase: 'Epic',
    modelo: 'Torino',
    precio: 42,
    oferta: true,
    cantidad: 0,
    stock: 10,
    image: 'assets/img/skin.jpg',
  },
  {
    nombre: 'Chasis algo',
    clase: 'Mistic',
    modelo: 'BMW',
    precio: 77,
    oferta: false,
    cantidad: 0,
    stock: 0,
    image: 'assets/img/skin.jpg',

  },
  {
    nombre: 'Auto',
    clase: 'Legend',
    modelo: 'Ferrari',
    precio: 42,
    oferta: true,
    cantidad: 0,
    stock: 0,
    image: 'assets/img/skin.jpg',

  },
  {
    nombre: 'Chasis algo',
    clase: 'Mistic',
    modelo: 'BMW',
    precio: 77,
    oferta: false,
    cantidad: 0,
    stock: 5,
    image: 'assets/img/skin.jpg',
  }
  ]


  constructor() { }

  ngOnInit(): void {
  }


  upCantidad(items: Item): void {
    if (items.cantidad < items.stock)
      items.cantidad++;

  }
  downCantidad(items: Item): void {
    if (items.cantidad > 0) {
      items.cantidad--;
    }

  }
  cambiarCantidad(event, items: Item): void {
    if (items.cantidad >= items.stock)
    items.cantidad = items.stock;
    if (items.cantidad < 0)
     items.cantidad = 0;
      
}

}