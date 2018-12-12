import { Directive, Input, HostBinding, OnChanges } from '@angular/core';
import { State } from '../enums/state.enum';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input() appState: State;
  @HostBinding('class') nomClasse: string;

  constructor() { }

  ngOnChanges() {
    this.nomClasse = this.formtClass(this.appState);
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
}
