import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  items = [{
    nombre: 'Rueda algo',
    clase: 'Epic',
    modelo: 'Torino',
    precio: 42,
  },
  {
    nombre: 'Chasis algo',
    clase: 'Mistic',
    modelo: 'BMW',
    precio: 77,
  }
  ]





  constructor() { }

  ngOnInit(): void {

  }
}
