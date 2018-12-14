import { Component, OnInit, Input } from '@angular/core';
import { Client } from 'src/app/shared/models/client.modele';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { ClientService } from '../../service/client.service';
import { faDumpsterFire } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item-client',
  templateUrl: './item-client.component.html',
  styleUrls: ['./item-client.component.scss']
})
export class ItemClientComponent implements OnInit {
  faDumpsterFire = faDumpsterFire;
  @Input() item: Client;
  states = Object.values(StateClient);

  constructor(private clientService: ClientService) { }

  ngOnInit() { }

  changeState(event) {
    const state = event.target.value;
    this.clientService.update(this.item, state).then(data => {
      this.item.state = state;
    });
  }

  supprimer(item: Client) {
    this.clientService.delete(item);
  }
}
