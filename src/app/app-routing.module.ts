import { RocketAboutComponent } from './rocket-about/rocket-about.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component: ItemsListComponent
  },
  {
    path: 'home',
    component: ItemsListComponent

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
