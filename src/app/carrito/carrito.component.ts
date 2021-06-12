import { Item } from './../items-list/Item';
//import { ItemsCarritoService } from './../items-carrito.service';
import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { ItemsCarritoService } from '../items-carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  listaCarrito: Observable<Item[]>;
  constructor(private itemsCarritoService: ItemsCarritoService) { 

}

ngOnInit(): void {
  // this.listaCarrito$ = this.carrito.listaCarrito.asObservable();
   //carrito.listaCarrito.subscribe(itemCarr =>this.carrito = itemCarr);
  this.listaCarrito= this.itemsCarritoService.getListaCarrito().asObservable();
  }

}