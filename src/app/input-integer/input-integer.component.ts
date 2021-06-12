import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
//import * as EventEmitter from 'node:events'; -> no compilaba
//import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.css']
})
export class InputIntegerComponent implements OnInit {
  constructor() { }
    @Input()
    cantidad : number;
    @Input()
    max : number;
    @Output()
    cantidadChange: EventEmitter<number> = new EventEmitter<number>();
    @Output()
    maxCantidad: EventEmitter<String> = new EventEmitter<String>();


  ngOnInit(): void {
  }
  upCantidad(): void {
    if (this.cantidad < this.max){
    this.cantidad++;
    this.cantidadChange.emit(this.cantidad);
    }

    else{
        this.maxCantidad.emit("Se alcanzo el maximo");
    }
  }
  downCantidad(): void {
    if (this.cantidad > 0) {
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);

    }

  }
  cambiarCantidad(): void {
    if (this.cantidad > this.max)
    this.cantidad = this.max;
    else if (this.cantidad < 0)
    this.cantidad = 0;
    else this.cantidadChange.emit(this.cantidad)
}

}
