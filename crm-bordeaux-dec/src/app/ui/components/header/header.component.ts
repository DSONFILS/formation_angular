import { Component, OnInit } from '@angular/core';
import { faBars, faUser, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string;
  faBars = faBars;
  faUser = faUser;
  faTimes = faTimes;
  open = true;
  constructor() {

  }

  ngOnInit() {
    this.title = 'Mon app\'';
  }

}
