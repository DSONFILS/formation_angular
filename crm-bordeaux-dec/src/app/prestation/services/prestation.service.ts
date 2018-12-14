import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {
  private _collection$: Observable<Prestation[]>;
  private _itemCollection: AngularFirestoreCollection<Prestation>;
  presta$: BehaviorSubject<Prestation> = new BehaviorSubject(null);

  constructor(
    private afs: AngularFirestore,
    private http: HttpClient
    ) {
      this.itemCollection = afs.collection<Prestation>('prestation');
      this.collection$ = this._itemCollection.valueChanges().pipe(
        // map (data => data.map( presta => new Prestation(presta)))
        map((data) => {
          this.presta$.next(new Prestation(data[0]));
          return data.map((presta) => {
            return new Prestation(presta);
          });
        })
      );
      /*this.collection$ = this.http.get<Prestation[]>(`${url}/prestation`).pipe(
        map (data => data.map( presta => new Prestation(presta)))
      );*/
    }

  public get itemCollection(): AngularFirestoreCollection<Prestation> {
    return this._itemCollection;
  }
  public set itemCollection(value: AngularFirestoreCollection<Prestation>) {
    this._itemCollection = value;
  }
  // get collection
  get collection$(): Observable<Prestation[]> {
    return this._collection$;
  }

  // set collection
  set collection$(collection: Observable<Prestation[]>) {
    this._collection$ = collection;
  }

  // add item in collection
  add(item: Prestation): Promise<any> {
    const id = this.afs.createId();
    const prestation = { id, ...item };
    return this.itemCollection.doc(id).set(prestation).catch((e) => {
      console.log(e);
    });
    // return this.http.post(`${url}/prestation`, prestation);
  }

  // update item in collection
  update(item: Prestation, state?: State): Promise<any> {
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
  public delete(item: Prestation): Promise<any> {
    return this.itemCollection.doc(item.id).delete().catch((e) => {
      console.log(e);
    });
    // return this.http.delete(`urlapi/prestations/delete/${item.id}`);
  }

  // get item by id
  getItem(id: string): Observable<Prestation> {
    return this.itemCollection.doc<Prestation>(id).valueChanges();
  }
}
