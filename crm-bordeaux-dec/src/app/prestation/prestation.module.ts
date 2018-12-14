import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { CommentPrestationComponent } from './components/comment-prestation/comment-prestation.component';
import { DetailPrestationComponent } from './components/detail-prestation/detail-prestation.component';
import { FormPrestationComponent } from './components/form-prestation/form-prestation.component';
import { FormReactivePrestationComponent } from './components/form-reactive-prestation/form-reactive-prestation.component';
import { ItemPrestationComponent } from './components/item-prestation/item-prestation.component';
import { AddPrestationComponent } from './containers/add-prestation/add-prestation.component';
import { EditPrestationComponent } from './containers/edit-prestation/edit-prestation.component';
import { ListPrestationComponent } from './containers/list-prestation/list-prestation.component';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PrestationRoutingModule } from './prestation-routing.module';

@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [PagePrestationsComponent, ListPrestationComponent, ItemPrestationComponent,
    // tslint:disable-next-line:max-line-length
    AddPrestationComponent, FormPrestationComponent, FormReactivePrestationComponent,
    DetailPrestationComponent, CommentPrestationComponent, EditPrestationComponent],
  imports: [
    CommonModule,
    PrestationRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbAccordionModule
  ]
})
export class PrestationModule { }
