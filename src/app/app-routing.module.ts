import { RocketHomeComponent } from './rocket-home/rocket-home.component';
import { RocketAboutComponent } from './rocket-about/rocket-about.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component: RocketHomeComponent
  },
  {
    path: 'home',
    component: RocketHomeComponent

  }, {
    path: 'about',
    component: RocketAboutComponent

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
