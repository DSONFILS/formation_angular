import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { pluck } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-prestations',
  templateUrl: './page-prestations.component.html',
  styleUrls: ['./page-prestations.component.scss']
})
export class PagePrestationsComponent implements OnInit {
  title$: Observable<Data>;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.title$ = this.activatedRoute.data.pipe(
      pluck('title')
    );
  }

}
