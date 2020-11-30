import { Component, Input, OnInit } from '@angular/core';
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
    if(disc.stock < this.max){
      disc.quantity++;
    }
  }

   downQuantity(disc: Disc): void {
     if(disc.quantity > 0){
       disc.quantity--;
     }
   }

   changeQuantity(event, disc: Disc): void{
    if(event.code < disc.stock){
      event.preventDefaul();
    }

   }


    

}
