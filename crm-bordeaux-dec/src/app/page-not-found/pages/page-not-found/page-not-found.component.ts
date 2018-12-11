import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  fullImagePath: string;

  constructor() {
    this.fullImagePath = require('../../../../assets/images/hydre_15.jpg');
  }

  ngOnInit() {
  }


}
