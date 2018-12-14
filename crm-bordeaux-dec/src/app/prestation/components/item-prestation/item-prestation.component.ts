import { Component, Input, OnInit } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { State } from 'src/app/shared/enums/state.enum';
import { PrestationService } from '../../services/prestation.service';
import { faDumpsterFire, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-prestation',
  templateUrl: './item-prestation.component.html',
  styleUrls: ['./item-prestation.component.scss']
})
export class ItemPrestationComponent implements OnInit {
  @Input() item: Prestation;
  states = Object.values(State);
  faDumpsterFire = faDumpsterFire;
  faEdit = faEdit;

  constructor(private prestatationService: PrestationService, private router: Router) { }

  ngOnInit() { }

  detail() {
    this.prestatationService.presta$.next(this.item);
  }

  changeState(event) {
    const state = event.target.value;
    this.prestatationService.update(this.item, state).then(data => {
      this.item.state = state;
    });
  }

  supprimer(item: Prestation) {
    this.prestatationService.delete(item);
  }

  edit() {
    this.router.navigate(['prestation/edit/', this.item.id]);
  }
}
