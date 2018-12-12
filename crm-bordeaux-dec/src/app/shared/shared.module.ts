import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BoutonComponent } from './component/bouton/bouton.component';
import { TableauComponent } from './component/tableau/tableau.component';
import { StateDirective } from './directive/state.directive';
import { TotalPipe } from './pipes/total.pipe';
import { FormulaireComponent } from './component/formulaire/formulaire.component';

@NgModule({
  declarations: [TotalPipe, StateDirective, TableauComponent, BoutonComponent, FormulaireComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [TotalPipe, StateDirective, TableauComponent, BoutonComponent, FormulaireComponent]
})
export class SharedModule { }
