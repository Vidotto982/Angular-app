import { Component, OnInit } from '@angular/core';
import { Item } from './Item';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  items : Item []= [{
    nombre: 'Rueda algo',
    clase: 'Epic',
    modelo: 'Torino',
    precio: 42,
    oferta: true,
  },
  {
    nombre: 'Chasis algo',
    clase: 'Mistic',
    modelo: 'BMW',
    precio: 77,
    oferta: false,

  },
  {
    nombre: 'Ruedas',
    clase: 'Legend',
    modelo: 'Ferrari',
    precio: 42,
    oferta: true,

  },
  {
    nombre: 'Chasis algo',
    clase: 'Mistic',
    modelo: 'BMW',
    precio: 77,
    oferta: false,

  }
  ]





  constructor() { }

  ngOnInit(): void {

  }
}
