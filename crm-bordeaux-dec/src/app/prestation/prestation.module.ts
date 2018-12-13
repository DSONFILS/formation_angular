import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { FormPrestationComponent } from './components/form-prestation/form-prestation.component';
import { FormReactivePrestationComponent } from './components/form-reactive-prestation/form-reactive-prestation.component';
import { ItemPrestationComponent } from './components/item-prestation/item-prestation.component';
import { AddPrestationComponent } from './containers/add-prestation/add-prestation.component';
import { ListPrestationComponent } from './containers/list-prestation/list-prestation.component';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PrestationRoutingModule } from './prestation-routing.module';

@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [PagePrestationsComponent, ListPrestationComponent, ItemPrestationComponent,
    AddPrestationComponent, FormPrestationComponent, FormReactivePrestationComponent],
  imports: [
    CommonModule,
    PrestationRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PrestationModule { }
