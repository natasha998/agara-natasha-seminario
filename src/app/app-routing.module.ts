import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarStoreComponent } from './car-store/car-store.component';
import { DiscListComponent } from './disc-list/disc-list.component';
import { DiscStoreComponent } from './disc-store/disc-store.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'nosotros',
    pathMatch:'full',
  },
  {
    path:'nosotros',
    component:DiscListComponent,
  },
  {
    path:'store',
    component:CarStoreComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
