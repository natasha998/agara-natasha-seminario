import { Injectable } from '@angular/core';
import { Disc } from './d-list';


/**
 * Logica del carrito
 */

@Injectable({
  providedIn: 'root'
})
export class DiscCardService {
  recordsList: Disc[] = [];

  constructor() { }

  addToCart(disc: Disc) {
    this.recordsList.push(disc);
  }
  
}
