import { Component, Input, OnInit } from '@angular/core';
import { discardPeriodicTasks } from '@angular/core/testing';
import { Disc } from '../d-list';
import { DiscCardService } from '../disc-card.service';

@Component({
  selector: 'app-store-quantity',
  templateUrl: './store-quantity.component.html',
  styleUrls: ['./store-quantity.component.scss']
})
export class StoreQuantityComponent implements OnInit {

  constructor(private cart: DiscCardService) { }
  
  @Input ()
  disc: Disc;

  @Input ()
  quantity: number;

  @Input () 
  max: number;

  ngOnInit(): void {
  }

  upQuantity(disc: Disc): void {
    if(disc.quantity < this.max){
      disc.quantity++;
    }
    else{
      this.disc.stock = 0;
    }
  }

   downQuantity(disc: Disc): void {
     if(disc.quantity > 0){
       disc.quantity--;
     }
   }

   changeQuantity(disc: Disc): void{
      if(disc.quantity >= disc.stock){
        disc.quantity = 0;
      }
   }


    

}
