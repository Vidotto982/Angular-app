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
    cantidad: 4,
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
  maxCantidad(m: String){
    alert(m); 
  }


}