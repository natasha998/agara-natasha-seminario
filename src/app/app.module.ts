import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DiscListComponent } from './disc-list/disc-list.component';
import { DiscStoreComponent } from './disc-store/disc-store.component';
import { StoreQuantityComponent } from './store-quantity/store-quantity.component';
import { CarStoreComponent } from './car-store/car-store.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DiscListComponent,
    DiscStoreComponent,
    StoreQuantityComponent,
    CarStoreComponent
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
