import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/shared/models/client.modele';
import { ClientService } from '../../service/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {
  constructor(private clientService: ClientService,
    private router: Router) { }

  ngOnInit() {
  }

  add(item: Client) {
    this.clientService.add(item).then((data) => {
      this.router.navigate(['client']);
    });
  }
}
