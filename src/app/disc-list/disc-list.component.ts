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
      name : 'RAMONES-RAMONES',
      type : 'Nuevo/Cerrado de fabrica',
      price : 3.948,
      quantity: 0,
      stock : 1,
      image : 'assets/img/ramones.jpg'
    },
    {
      numberDisc : 2,
      name : 'BEATLES – REVOLVER',
      type : 'Nuevo/Cerrado de fabrica',
      price : 3950,
      quantity: 0,
      stock : 0,
      image : 'assets/img/Beatles.jpg'
    },
    {
      numberDisc : 3,
      name : 'LENNY KRAVITZ – ARE YOU GONNA GO MY WAY',
      type : 'Nuevo/Cerrado de fabrica',
      price : 5950,
      quantity: 0,
      stock : 3,
      image : 'assets/img/LennyKravitz.jpg'
    },
    {
      numberDisc : 4,
      name : 'BLACK SABBATH – PARANOID',
      type : 'Nuevo/Cerrado de fabrica',
      price : 5500,
      quantity: 0,
      stock : 0,
      image : 'assets/img/BlackSabbath.jpg'
    },
    {
      numberDisc : 5,
      name : 'BEASTIE BOYS – ILL COMMUNICATION',
      type : 'Nuevo/Cerrado de fabrica',
      price : 5500,
      quantity: 0,
      stock : 2,
      image : 'assets/img/BeastieBoys.jpg'
    },
    {
      numberDisc : 6,
      name : 'LED ZEPPELIN – IV',
      type : 'Nuevo/Cerrado de fabrica',
      price : 3950,
      quantity: 0,
      stock : 6,
      image : 'assets/img/LedZeppelin.jpg'
    },
    {
      numberDisc : 7,
      name : 'ROLLING STONES – LET IT BLEED',
      type : 'Nuevo/Cerrado de fabrica',
      price : 3950,
      quantity: 0,
      stock : 1,
      image : 'assets/img/RolligStones.jpg'
    },
    {
      numberDisc :8,
      name : 'BOB MARLEY - LEGEND',
      type : 'Nuevo/Cerrado de fabrica',
      price : 4400,
      quantity: 0,
      stock : 4,
      image : 'assets/img/BobMarley.jpg'
    },
    {
      numberDisc : 9,
      name : 'AMY WINEHOUSE – BACK TO BLACK',
      type : 'Nuevo/Cerrado de fabrica',
      price : 3950,
      quantity: 0,
      stock : 3,
      image : 'assets/img/AmyWinehouse.jpg'
    },
    {
      numberDisc : 10,
      name : 'MIGUEL MATEOS – KRYPTONITA',
      type : 'Nuevo/Cerrado de fabrica',
      price : 2800,
      quantity: 0,
      stock : 3,
      image : 'assets/img/MiguelMateos.jpg'
    },
    {
      numberDisc : 11,
      name : ' CIRO – NARANJA PERSA',
      type : 'Nuevo/Cerrado de fabrica',
      price : 2450,
      quantity: 0,
      stock : 3,
      image : 'assets/img/ciro.jpg'
    },
    {
      numberDisc : 12,
      name : 'RATONES PARANOICOS, LOS – RATONES PARANOICOS',
      type : 'Nuevo/Cerrado de fabrica',
      price : 2800,
      quantity: 0,
      stock : 3,
      image : 'assets/img/RatonesParanoicos.jpg'
    },
    {
      numberDisc : 14,
      name : 'AC/DC-IF YOU WANT BLOOD',
      type : 'Nuevo/Cerrado de fabrica',
      price : 4500,
      quantity: 0,
      stock : 2,
      image : 'assets/img/AC-DC.jpg'
    },
    {
      numberDisc : 15,
      name : 'FULL METAL',
      type : 'Nuevo/Cerrado de fabrica',
      price : 3500,
      quantity: 0,
      stock : 3,
      image : 'assets/img/V-A.jpg'
    }
    
  ];

  discInfo: any;
  toShow :boolean;
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
    this.toShow = true;
  }
}