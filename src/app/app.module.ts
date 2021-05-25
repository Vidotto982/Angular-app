import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ItemsListComponent } from './items-list/items-list.component';
import { NavComponent } from './nav/nav.component';
import { CarritoComponent } from './carrito/carrito.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, ItemsListComponent, NavComponent, CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
