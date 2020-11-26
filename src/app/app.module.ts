import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiscListComponent } from './disc-list/disc-list.component';
import { DiscStoreComponent } from './disc-store/disc-store.component';
import { DiscCommentComponent } from './disc-comment/disc-comment.component';
import { DiscCommentUserComponent } from './disc-comment-user/disc-comment-user.component';
import { StoreQuantityComponent } from './store-quantity/store-quantity.component';

@NgModule({
  declarations: [
    AppComponent,
    DiscListComponent,
    DiscStoreComponent,
    DiscCommentComponent,
    DiscCommentUserComponent,
    StoreQuantityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
