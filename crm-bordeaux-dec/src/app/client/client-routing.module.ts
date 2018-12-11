import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageClientComponent } from './pages/page-client/page-client.component';

const appRoutes: Routes = [
  {path: '', component: PageClientComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class ClientRoutingModule { }
