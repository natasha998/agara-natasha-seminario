import { Component, OnInit } from '@angular/core';
import { DiscCardService } from '../disc-card.service';
import { Disc } from '../d-list';

@Component({
  selector: 'app-disc-store',
  templateUrl: './disc-store.component.html',
  styleUrls: ['./disc-store.component.scss']
})
export class DiscStoreComponent implements OnInit {
  
  
  constructor() { }

  ngOnInit(): void {
  }
  
}
