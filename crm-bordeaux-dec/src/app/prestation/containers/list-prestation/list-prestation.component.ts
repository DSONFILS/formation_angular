import { Component, OnInit } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { PrestationService } from '../../services/prestation.service';

@Component({
  selector: 'app-list-prestation',
  templateUrl: './list-prestation.component.html',
  styleUrls: ['./list-prestation.component.scss']
})
export class ListPrestationComponent implements OnInit {
  collection: Prestation[];
  headers: string[];

  constructor(private prestationService: PrestationService) { }

  ngOnInit() {
    this.collection = this.prestationService.collection;
    this.headers = [
      'Prestation',
      'Client',
      'Nbjours',
      'tjmht',
      'Total HT',
      'Total TTC',
      'Etat',
      ''
    ];
  }

}
