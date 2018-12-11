import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ListPrestationComponent } from './containers/list-prestation/list-prestation.component';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PrestationRoutingModule } from './prestation-routing.module';
import { ItemPrestationComponent } from './components/item-prestation/item-prestation.component';

@NgModule({
  declarations: [PagePrestationsComponent, ListPrestationComponent, ItemPrestationComponent],
  imports: [
    CommonModule,
    PrestationRoutingModule,
    SharedModule
  ]
})
export class PrestationModule { }
