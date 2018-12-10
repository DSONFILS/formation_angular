import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public title: string;
  faBars = faBars;
  faUser = faUser;
  constructor() {

  }

  ngOnInit() {
    this.title = 'Mon app\'';
  }

}
