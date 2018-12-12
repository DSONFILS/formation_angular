import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ClientRoutingModule } from './client-routing.module';
import { AddClientComponent } from './components/add-client/add-client.component';
import { ItemClientComponent } from './components/item-client/item-client.component';
import { ListClientComponent } from './containers/list-client/list-client.component';
import { PageClientComponent } from './pages/page-client/page-client.component';

@NgModule({
  declarations: [PageClientComponent, ListClientComponent, ItemClientComponent, AddClientComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule
  ]
})
export class ClientModule { }
