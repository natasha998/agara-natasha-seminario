import { Component, Input, OnInit } from '@angular/core';
import { DiscCardService } from '../disc-card.service';

@Component({
  selector: 'app-store-quantity',
  templateUrl: './store-quantity.component.html',
  styleUrls: ['./store-quantity.component.scss']
})
export class StoreQuantityComponent implements OnInit {

  constructor(private cart: DiscCardService) { }
  
  @Input ()
  quantity: number;

  @Input () 
  max: number;

  ngOnInit(): void {
  }

  upQuantity(): void {
    if(this.quantity < this.max){
      this.quantity++;
    }
  }

   downQuantity(): void {
     if(this.quantity > 0){
       this.quantity--;
     }
   }

}
