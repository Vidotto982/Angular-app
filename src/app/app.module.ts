import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ItemsListComponent } from './items-list/items-list.component';
import { NavComponent } from './nav/nav.component';
import { CarritoComponent } from './carrito/carrito.component';
import { FormsModule } from '@angular/forms';
import { RocketAboutComponent } from './rocket-about/rocket-about.component';
import { RocketHomeComponent } from './rocket-home/rocket-home.component';

@NgModule({
  declarations: [
    AppComponent, ItemsListComponent, NavComponent, CarritoComponent, RocketAboutComponent, RocketHomeComponent
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
