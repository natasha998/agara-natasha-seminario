import { Injectable } from '@angular/core';
import { Disc } from './d-list';

@Injectable({
  providedIn: 'root'
})

export class DiscCardService {
  recordsList: Disc[] = [];

  constructor() { }

  addToCart(disc: Disc) {
    let item:Disc = this.recordsList.find((v1) => v1.name == disc.name)
    if(!item) {
      this.recordsList.push({ ... disc});
    }else{
      item.quantity += disc.quantity;
    }
  }
  
}
