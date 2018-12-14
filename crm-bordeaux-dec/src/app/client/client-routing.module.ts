import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageClientComponent } from './pages/page-client/page-client.component';
import { AddClientComponent } from './containers/add-client/add-client.component';

const appRoutes: Routes = [
  {path: '', component: PageClientComponent,
   data: {title: 'client'}
  },
  {path: 'add', component: AddClientComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class ClientRoutingModule { }
