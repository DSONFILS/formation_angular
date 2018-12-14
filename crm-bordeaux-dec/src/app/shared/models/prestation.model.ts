import { PrestationI } from '../interfaces/prestation-i';
import { State } from '../enums/state.enum';

export class Prestation implements PrestationI {
  id: string;
  typePresta: string;
  client: string;
  tjmHT = 500;
  nbJours = 0;
  tauxTva = 20;
  state = State.OPTION;
  comment: string;

  constructor(fields?: Partial<Prestation>) {
    if (fields) {
      Object.assign(this, fields);
    }
  }
  totalHT(): number {
    return this.nbJours * this.tjmHT;
  }

  totalTTC (tva?: number): number {
    if (!tva) {
      return this.totalHT() * (1 + this.tauxTva / 100);
    }
    if (tva <= 0) {
      return this.totalHT();
    }
    return this.totalHT() * (1 + tva / 100);
  }
}
