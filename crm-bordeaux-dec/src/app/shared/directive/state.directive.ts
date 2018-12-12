import { Directive, Input, HostBinding, OnChanges } from '@angular/core';
import { State } from '../enums/state.enum';
import { Client } from '../models/client.modele';
import { StateClient } from '../enums/state-client.enum';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input() appState: State;
  @Input() appStateClient: StateClient;
  @HostBinding('class') nomClasse: string;

  constructor() { }

  ngOnChanges() {
    if (this.appState) {
      this.nomClasse = this.formtClass(this.appState);
    }
    if (this.appStateClient) {
      this.nomClasse = this.formtClassClient(this.appStateClient);
    }
  }

  /*
   *  Option => state-option
   *  Annulé => state-annule
   *  Confirmer => state-confirme
   *  Facture payée => state-facturepayee
   */
  private formtClass(state: State): string {
    return  `state-${state.normalize('NFD').replace(/[-\u0300-\u036f\s]/g, '').toLowerCase()}`;
  }

  private formtClassClient(state: StateClient): string {
    return  `state-${state.normalize('NFD').replace(/[-\u0300-\u036f\s]/g, '').toLowerCase()}`;
  }
}
