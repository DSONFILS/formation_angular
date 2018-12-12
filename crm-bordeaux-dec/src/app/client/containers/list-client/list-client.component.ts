import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client.modele';
import { ClientService } from '../../service/client.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.scss']
})
export class ListClientComponent implements OnInit {
  collection: Client[];
  headers: string[];

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.collection = this.clientService.collection;
    this.headers = [
      'Nom',
      'Email',
      'Etat',
      ''
    ];
  }
}
