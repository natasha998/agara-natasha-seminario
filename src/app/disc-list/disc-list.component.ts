import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { DiscCardService } from '../disc-card.service';
import { Disc } from '../d-list';

@Component({
  selector: 'app-disc-list', 
  templateUrl: './disc-list.component.html',
  styleUrls: ['./disc-list.component.scss']
})
export class DiscListComponent implements OnInit {
  
  discs: Disc[] = [
    {
      name : 'Ramones-Ramones',
      type : 'Nuevo',
      price : 3.948,
      quantity: 0,
      stock : 5,
      image : ' '
    },
    {
      name : 'Ramones-Ramones',
      type : 'Nuevo',
      price : 3.948,
      quantity: 0,
      stock : 5,
      image : ' '
    }
  ];
  
  constructor(private cart: DiscCardService) {
   }

  ngOnInit(): void {
  }
  
}
