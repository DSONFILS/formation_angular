import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { PrestationService } from '../../services/prestation.service';

@Component({
  selector: 'app-add-prestation',
  templateUrl: './add-prestation.component.html',
  styleUrls: ['./add-prestation.component.scss']
})
export class AddPrestationComponent implements OnInit {

  constructor(private prestationService: PrestationService,
    private router: Router) { }

  ngOnInit() {
  }

  add(item: Prestation) {
    this.prestationService.add(item);
    this.router.navigate(['prestation']);
  }

}
