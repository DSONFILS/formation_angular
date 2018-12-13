import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation.model';

@Component({
  selector: 'app-form-reactive-prestation',
  templateUrl: './form-reactive-prestation.component.html',
  styleUrls: ['./form-reactive-prestation.component.scss']
})
export class FormReactivePrestationComponent implements OnInit {

  states = Object.values(State);
  init = new Prestation();
  form: FormGroup;
  @Output() nItem: EventEmitter<Prestation> = new EventEmitter();

  constructor(private router: Router,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      typePresta: [
        this.init.typePresta,
        Validators.required],
      client: [
        this.init.client,
        Validators.compose([Validators.required, Validators.minLength(3)])
      ],
      tjmHT: this.init.tjmHT,
      nbJours: this.init.nbJours,
      tauxTva: this.init.tauxTva,
      state: this.init.state
    });
  }

  onSubmit() {
    this.nItem.emit(this.form.value);
  }

  annuler() {
    this.router.navigate(['prestation']);
  }
}
