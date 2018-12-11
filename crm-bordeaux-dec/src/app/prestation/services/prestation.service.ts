import { Injectable } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { fakeCollection } from './fake-prestation';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {
  private _collection: Prestation[];
  constructor() {
    this.collection = fakeCollection;
  }

  // get collection
  get collection(): Prestation[] {
    return this._collection;
  }

  // set collection
  set collection(collection: Prestation[]) {
    this._collection = collection;
  }

  // add item in collection

  // update item in collection

  // delete item in collection

  // get item by id
}
