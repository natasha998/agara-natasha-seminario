import { Component, Input, OnInit} from '@angular/core';
import { DiscCardService } from '../disc-card.service';
import { Disc } from '../d-list';

@Component({
  selector: 'app-disc-store',
  templateUrl: './disc-store.component.html',
  styleUrls: ['./disc-store.component.scss']
})
export class DiscStoreComponent implements OnInit {

  @Input()
  discData: any;
  
  discCard: DiscCardService;

  constructor(private card: DiscCardService) { }


  ngOnInit(): void {
  }

  addToCard(disc): void{
    this.discCard.addToCart(disc);
    disc.stock -= disc.quantity;
    disc.quantity = 0;
  }
 
}
