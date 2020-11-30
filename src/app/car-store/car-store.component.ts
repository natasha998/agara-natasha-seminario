import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Disc } from '../d-list';
import { DiscCardService } from '../disc-card.service';

@Component({
  selector: 'app-car-store',
  templateUrl: './car-store.component.html',
  styleUrls: ['./car-store.component.scss']
})
export class CarStoreComponent implements OnInit {
  
  recordsList$: Observable<Disc[]>;

  constructor(private carr: DiscCardService) {
    this.recordsList$ = carr.recordsList.asObservable();
  }

  ngOnInit(): void {
  }

}
