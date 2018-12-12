import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { AddPrestationComponent } from './components/add-prestation/add-prestation.component';

const appRoutes: Routes = [
  {path: '', component: PagePrestationsComponent},
  {path: 'add', component: AddPrestationComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes,
    )
  ]
})
export class PrestationRoutingModule { }
