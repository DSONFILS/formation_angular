import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ClientRoutingModule } from './client-routing.module';
import { ItemClientComponent } from './components/item-client/item-client.component';
import { ListClientComponent } from './containers/list-client/list-client.component';
import { PageClientComponent } from './pages/page-client/page-client.component';
import { AddClientComponent } from './containers/add-client/add-client.component';
import { FormReactiveClientComponent } from './components/form-reactive-client/form-reactive-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PageClientComponent, ListClientComponent, ItemClientComponent, AddClientComponent, FormReactiveClientComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClientModule { }
