import { Injectable } from '@angular/core';
import { PrestationService } from './prestation.service';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, EMPTY, of } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import { Prestation } from 'src/app/shared/models/prestation.model';

@Injectable({
  providedIn: 'root'
})
export class PrestationResolveService {

  constructor(private prestationService: PrestationService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Prestation> | Observable<never> {
    const id = route.paramMap.get('id');
    return this.prestationService.getItem(id).pipe(
      take(1),
      mergeMap(data => {
        if (data) {
          return of(data);
        } else { // id not found
          this.router.navigate(['/prestation']);
          return EMPTY;
        }
      })
    );
  }
}
