import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from './items-list/Item';

@Injectable({
  providedIn: 'root'
})
export class ItemsCarritoService {

  private _listaCarrito: Item[] = [];
  listaCarrito:BehaviorSubject <Item[]>= new BehaviorSubject ([]);

  agregarAlCarrito(item: Item) {
    let itemsCar: Item =this._listaCarrito.find((itemCarr) => itemCarr.nombre == item.nombre);
    if(!itemsCar){
      this._listaCarrito.push({...item});
    }
    else{
      itemsCar.cantidad += item.cantidad;
    }
    this.listaCarrito.next(this._listaCarrito);
    console.log(this._listaCarrito)

  }

  constructor() { }
}
