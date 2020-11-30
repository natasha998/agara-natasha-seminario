import { Component, OnInit  } from '@angular/core';
import { Disc } from '../d-list';

@Component({
  selector: 'app-disc-list', 
  templateUrl: './disc-list.component.html',
  styleUrls: ['./disc-list.component.scss']
})
export class DiscListComponent implements OnInit {
  
  discs: Disc[] = [
    {
      numberDisc : 1,
      name : 'Ramones-Ramones',
      type : 'Nuevo',
      price : 3.948,
      quantity: 0,
      stock : 0,
      image : 'assets/img/ramones.jpg'
    },
    {
      numberDisc : 2,
      name : 'Divididos',
      type : 'Nuevo',
      price : 3.009,
      quantity: 4,
      stock : 4,
      image : 'assets/img/ramones.jpg'
    },
    {
      numberDisc : 3,
      name : 'Ramones-Ramones',
      type : 'Nuevo',
      price : 3.948,
      quantity: 3,
      stock : 3,
      image : 'assets/img/ramones.jpg'
    }
    
  ];

  discInfo: any;
  mostrar :boolean;
  posView : number;

  constructor() {
   }

  ngOnInit(): void {
  }

  infoCardDisc(discData){
    this.discInfo = discData;
  }

  viewData(number){
    this.posView = number;
    this.mostrar = true;
  }
}
