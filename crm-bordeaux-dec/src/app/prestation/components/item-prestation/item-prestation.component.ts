import { Component, Input, OnInit } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { State } from 'src/app/shared/enums/state.enum';
import { PrestationService } from '../../services/prestation.service';

@Component({
  selector: 'app-item-prestation',
  templateUrl: './item-prestation.component.html',
  styleUrls: ['./item-prestation.component.scss']
})
export class ItemPrestationComponent implements OnInit {
  @Input() item: Prestation;
  states = Object.values(State);

  constructor(private prestatationService: PrestationService) { }

  ngOnInit() { }

  changeState(event) {
    const state = event.target.value;
    this.prestatationService.update(this.item, state);
  }
}
