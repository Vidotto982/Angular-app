import { Component, OnInit } from '@angular/core';
import { carrito } from './carrito';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

 carrito: carrito[] =  [{
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


 }]
  constructor() { }

  ngOnInit(): void {

  }

}
