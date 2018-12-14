import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { PrestationService } from '../../services/prestation.service';

@Component({
  selector: 'app-comment-prestation',
  templateUrl: './comment-prestation.component.html',
  styleUrls: ['./comment-prestation.component.scss']
})
export class CommentPrestationComponent implements OnInit {
  presta$: BehaviorSubject<Prestation>;

  constructor(private prestationService: PrestationService) { }

  ngOnInit() {
    this.presta$ = this.prestationService.presta$;
  }

}
