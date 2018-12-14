import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Client } from 'src/app/shared/models/client.modele';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private _collection$: Observable<Client[]>;
  private _itemCollection: AngularFirestoreCollection<Client>;

  constructor(
    private afs: AngularFirestore
    ) {
      this.itemCollection = afs.collection<Client>('client');
      this._collection$ = this._itemCollection.valueChanges().pipe(
        // map (data => data.map( presta => new Prestation(presta)))
        map((data) => {
          return data.map((cl) => {
            return new Client(cl);
          });
        })
      );
    }

  get itemCollection(): AngularFirestoreCollection<Client> {
    return this._itemCollection;
  }
  set itemCollection(value: AngularFirestoreCollection<Client>) {
    this._itemCollection = value;
  }

  // get collection
  get collection$(): Observable<Client[]> {
    return this._collection$;
  }

  // set collection
  set collection$(collection: Observable<Client[]>) {
    this._collection$ = collection;
  }

  // add item in collection
  add(item: Client): Promise<any> {
    const id = this.afs.createId();
    const prestation = { id, ...item };
    return this.itemCollection.doc(id).set(prestation).catch((e) => {
      console.log(e);
    });
  }

  // update item in collection
  update(item: Client, state?: StateClient): Promise<any> {
    const presta = {...item};
    if (state) {
      presta.state = state;
    }
    return this.itemCollection.doc(item.id).update(presta).catch((e) => {
      console.log(e);
    });
    // return this.http.patch('urlapi/prestationupdate/'+item.id, presta);
  }

  // delete item in collection
  public delete(item: Client): Promise<any> {
    return this.itemCollection.doc(item.id).delete().catch((e) => {
      console.log(e);
    });
  }

}
