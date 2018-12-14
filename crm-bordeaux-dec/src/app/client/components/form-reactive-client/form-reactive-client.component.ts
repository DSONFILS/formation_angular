import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Client } from 'src/app/shared/models/client.modele';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-reactive-client',
  templateUrl: './form-reactive-client.component.html',
  styleUrls: ['./form-reactive-client.component.scss']
})
export class FormReactiveClientComponent implements OnInit {

  states = Object.values(StateClient);
  init = new Client();
  form: FormGroup;
  @Output() nItem: EventEmitter<Client> = new EventEmitter();

  constructor(private router: Router,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: [
        this.init.name,
        Validators.required],
      email: [
        this.init.email,
        Validators.compose([Validators.required, Validators.email])
      ],
      state: this.init.state
    });
  }

  onSubmit() {
    this.nItem.emit(this.form.value);
  }

  annuler() {
    this.router.navigate(['client']);
  }

}
