import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Disc } from './d-list';

@Injectable({
  providedIn: 'root'
})

export class DiscCardService {

  private _recordsList : Disc [] = [];
  recordsList: BehaviorSubject<Disc[]> = new BehaviorSubject ([]);

  constructor() { }

  addCarStore(disc: Disc) {
    let item:Disc = this._recordsList.find((v1) => v1.name == disc.name)
    if(!item) {
      this._recordsList.push({ ... disc});
    }else{
      item.quantity += disc.quantity;
    }
    this.recordsList.next(this._recordsList);
  }
}
