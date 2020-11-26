import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiscCommentComponent } from './disc-comment/disc-comment.component';
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
    component:DiscStoreComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
