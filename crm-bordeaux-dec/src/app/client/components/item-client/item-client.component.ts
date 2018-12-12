import { Component, OnInit, Input } from '@angular/core';
import { Client } from 'src/app/shared/models/client.modele';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { ClientService } from '../../service/client.service';

@Component({
  selector: 'app-item-client',
  templateUrl: './item-client.component.html',
  styleUrls: ['./item-client.component.scss']
})
export class ItemClientComponent implements OnInit {
  @Input() item: Client;
  states = Object.values(StateClient);

  constructor(private prestatationService: ClientService) { }

  ngOnInit() { }

  changeState(event) {
    const state = event.target.value;
    this.prestatationService.update(this.item, state);
  }
}
