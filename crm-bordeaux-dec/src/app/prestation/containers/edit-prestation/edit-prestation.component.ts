import { Component, OnInit } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PrestationService } from '../../services/prestation.service';

@Component({
  selector: 'app-edit-prestation',
  templateUrl: './edit-prestation.component.html',
  styleUrls: ['./edit-prestation.component.scss']
})
export class EditPrestationComponent implements OnInit {
  presta: Prestation;
  constructor(private route: ActivatedRoute,
    private prestationService: PrestationService,
    private router: Router) { }

  ngOnInit() {
    this.route.data
    .subscribe((data: { item: Prestation }) => {
      this.presta = data.item;
    });
  }

  update(item: Prestation) {
    item.id = this.presta.id;
    this.prestationService.update(item).then(() => {
      this.router.navigate(['prestation']);
    });
  }
}
