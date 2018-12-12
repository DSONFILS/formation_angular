import { Injectable } from '@angular/core';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Client } from 'src/app/shared/models/client.modele';
import { fakeCollection } from './fake-client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private _collection: Client[];
  constructor() {
    this.collection = fakeCollection;
  }

  // get collection
  get collection(): Client[] {
    return this._collection;
  }

  // set collection
  set collection(collection: Client[]) {
    this._collection = collection;
  }

  update(item: Client, state: StateClient) {
    item.state = state;
  }
}
