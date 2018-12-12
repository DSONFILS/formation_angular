import { Component, OnInit, Input } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bouton',
  templateUrl: './bouton.component.html',
  styleUrls: ['./bouton.component.scss']
})
export class BoutonComponent implements OnInit {
  @Input() label: string;
  faPlus = faPlus;

  constructor() { }

  ngOnInit() {
  }

}
