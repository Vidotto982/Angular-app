import { Item } from './../items-list/Item';
import { ItemsCarritoService } from './../items-carrito.service';
import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  listaCarrito$: Observable<Item[]>;
  constructor(private carrito: ItemsCarritoService) { 
  this.listaCarrito$ = carrito.listaCarrito.asObservable();
  }
  
 // carrito.listaCarrito.subscribe(itemCarr =>this.listaCarrito = itemCarr);
  ngOnInit(): void {

  }

}
