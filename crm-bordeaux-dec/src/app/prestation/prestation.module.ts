import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AddPrestationComponent } from './components/add-prestation/add-prestation.component';
import { ItemPrestationComponent } from './components/item-prestation/item-prestation.component';
import { ListPrestationComponent } from './containers/list-prestation/list-prestation.component';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PrestationRoutingModule } from './prestation-routing.module';

@NgModule({
  declarations: [PagePrestationsComponent, ListPrestationComponent, ItemPrestationComponent, AddPrestationComponent],
  imports: [
    CommonModule,
    PrestationRoutingModule,
    SharedModule
  ]
})
export class PrestationModule { }
