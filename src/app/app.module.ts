import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http' 
import { ItemsListComponent } from './items-list/items-list.component';
import { NavComponent } from './nav/nav.component';
import { CarritoComponent } from './carrito/carrito.component';
import { FormsModule } from '@angular/forms';
import { RocketAboutComponent } from './rocket-about/rocket-about.component';
import { RocketHomeComponent } from './rocket-home/rocket-home.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';

@NgModule({
  declarations: [
    AppComponent, ItemsListComponent, NavComponent, CarritoComponent, RocketAboutComponent, RocketHomeComponent, InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
