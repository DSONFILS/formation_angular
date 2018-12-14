import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentPrestationComponent } from './components/comment-prestation/comment-prestation.component';
import { DetailPrestationComponent } from './components/detail-prestation/detail-prestation.component';
import { AddPrestationComponent } from './containers/add-prestation/add-prestation.component';
import { EditPrestationComponent } from './containers/edit-prestation/edit-prestation.component';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PrestationResolveService } from './services/prestation-resolve.service';

const appRoutes: Routes = [
  { path: '', component: PagePrestationsComponent,
    data: {title: 'prestation'},
    children: [
      {path: 'detail', component: DetailPrestationComponent},
      {path: 'comment', component: CommentPrestationComponent},
    ]},
  { path: 'add', component: AddPrestationComponent  },
  { path: 'edit/:id', component: EditPrestationComponent,
    resolve: {
      item: PrestationResolveService
    },
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes,
    )
  ]
})
export class PrestationRoutingModule { }
