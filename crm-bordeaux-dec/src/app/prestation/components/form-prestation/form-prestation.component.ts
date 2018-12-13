import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation.model';

@Component({
  selector: 'app-form-prestation',
  templateUrl: './form-prestation.component.html',
  styleUrls: ['./form-prestation.component.scss']
})
export class FormPrestationComponent implements OnInit {
  states = Object.values(State);
  init = new Prestation();
  @Output() nItem: EventEmitter<Prestation> = new EventEmitter();

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  onSubmit() {
    this.nItem.emit(this.init);
  }

  annuler() {
    this.router.navigate(['prestation']);
  }
}
