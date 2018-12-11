import { Pipe, PipeTransform } from '@angular/core';
import { Prestation } from '../models/prestation.model';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: Prestation, tauxTva?: number): number {
    if (value) {
      if (tauxTva) {
        return value.totalTTC(tauxTva);
      }
      return value.totalHT();
    }
    return null;
  }

}
