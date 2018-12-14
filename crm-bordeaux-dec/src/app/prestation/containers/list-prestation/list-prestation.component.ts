import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PrestationService } from 'src/app/prestation/services/prestation.service';
import { Prestation } from 'src/app/shared/models/prestation.model';

@Component({
  selector: 'app-list-prestation',
  templateUrl: './list-prestation.component.html',
  styleUrls: ['./list-prestation.component.scss']
})
export class ListPrestationComponent implements OnInit, OnDestroy {
  collection$: Observable<Prestation[]>;
  headers: string[];
  // subscription: Subscription;

  constructor(private prestationService: PrestationService) { }

  ngOnInit() {
    this.collection$ = this.prestationService.collection$;
    /*this.subscription = this.prestationService.collection$.subscribe(
      (data) => { this.collection = data; },
      (error) => { console.log(error); },
      () => { console.log('Completed'); }
    );*/
    this.headers = [
      'Prestation',
      'Client',
      'Nbjours',
      'tjmht',
      'Total HT',
      'Total TTC',
      'Etat',
      '',
      '',
      ''
    ];
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

}
