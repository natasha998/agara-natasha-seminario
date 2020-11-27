import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { DiscCardService } from '../disc-card.service';
import { Disc } from '../d-list';
import { discardPeriodicTasks } from '@angular/core/testing';

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
      image : 'assets/img/ramones.jpg'
    },
    {
      name : 'Divididos',
      type : 'usado',
      price : 3.948,
      quantity: 0,
      stock : 5,
      image : '',
    },
    {
      name : 'Divididos',
      type : 'usado',
      price : 3.948,
      quantity: 0,
      stock : 5,
      image : '',
    },
    {
      name : 'Divididos',
      type : 'usado',
      price : 3.948,
      quantity: 0,
      stock : 5,
      image : '',
    },
    {
      name : 'Divididos',
      type : 'usado',
      price : 3.948,
      quantity: 0,
      stock : 5,
      image : '',
    },
    {
      name : 'Divididos',
      type : 'usado',
      price : 3.948,
      quantity: 0,
      stock : 5,
      image : '',
    },
    {
      name : 'Divididos',
      type : 'usado',
      price : 3.948,
      quantity: 0,
      stock : 5,
      image : '',
    },{
      name : 'Divididos',
      type : 'usado',
      price : 3.948,
      quantity: 0,
      stock : 5,
      image : '',
    },{
      name : 'Divididos',
      type : 'usado',
      price : 3.948,
      quantity: 0,
      stock : 5,
      image : '',
    }

  ];

  constructor() {
   }

  ngOnInit(): void {
  }

  //Me esta devolviendo el objeto de esa posicion 
  onInfoDisc(discPos){
    console.log(discPos.name);
    console.log(discPos.type);
    console.log(discPos.stock);
    return discPos;
  }


}
