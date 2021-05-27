import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from './items-list/Item';

//const URL = 'https://60b011cc1f26610017ffdc73.mockapi.io';
@Injectable({
  providedIn: 'root'
})
export class ItemDataService {

  constructor(private http: HttpClient) { }


  //public getAll(): Observable<Item[]> {
  //  return this.http.get<Item[]>(URL) // se puede cambiar dependiendo de que se quiera hacer, sea post, put o deleate
  // //     tap((items: Item[])=> items.forEach(items => items.cantidad = 0))        
   //     );//<- nos permite modificar el observable ANTES de pasarlo al component          
 // }
}
