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
    oferta: false,
    cantidad: 0,
    stock: 9,
    image: 'assets/img/skin.jpg',
  },
  {
    nombre: 'Rueda algo',
    clase: 'Epic',
    modelo: 'Torino',
    precio: 42,
    oferta: false,
    cantidad: 0,
    stock: 2,
    image: 'assets/img/skin.jpg',
  },
  {
    nombre: 'Rueda algo',
    clase: 'Epic',
    modelo: 'Torino',
    precio: 42,
    oferta: false,
    cantidad: 0,
    stock: 7,
    image: 'assets/img/skin.jpg',
  },
  {
    nombre: 'Rueda algo',
    clase: 'Epic',
    modelo: 'Torino',
    precio: 42,
    oferta: true,
    cantidad: 0,
    stock: 5,
    image: 'assets/img/skin.jpg',
  },
  ]
  constructor() { }

  ngOnInit(): void {
  }
  maxCantidad(m: String) {
    alert(m);
  }


}