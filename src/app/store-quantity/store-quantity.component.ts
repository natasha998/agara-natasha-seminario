import { Component, OnInit } from '@angular/core';
import { DiscCardService } from '../disc-card.service';

@Component({
  selector: 'app-store-quantity',
  templateUrl: './store-quantity.component.html',
  styleUrls: ['./store-quantity.component.scss']
})
export class StoreQuantityComponent implements OnInit {

  constructor(private cart: DiscCardService) { }

  ngOnInit(): void {
  }

}
