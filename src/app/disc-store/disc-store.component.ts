import { Component, Input, OnInit} from '@angular/core';
import { DiscCardService } from '../disc-card.service';
import { Disc } from '../d-list';

@Component({
  selector: 'app-disc-store',
  templateUrl: './disc-store.component.html',
  styleUrls: ['./disc-store.component.scss']
})
export class DiscStoreComponent implements OnInit {
  
  mostrarBtn = false;

  @Input()
  discData: any;

  constructor(private carr: DiscCardService) { }


  ngOnInit(): void {
  }

  addToCart(disc): void{
    this.carr.addCarStore(disc);
    disc.stock -= disc.quantity;
    disc.quantity = 0;
  }
 
}
