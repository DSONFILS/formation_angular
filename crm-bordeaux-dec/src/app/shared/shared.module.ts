import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TemplateModule } from '../templates/template.module';
import { BoutonComponent } from './component/bouton/bouton.component';
import { FormulaireComponent } from './component/formulaire/formulaire.component';
import { TableauComponent } from './component/tableau/tableau.component';
import { FormValidationDirective } from './directive/form-validation.directive';
import { StateDirective } from './directive/state.directive';
import { TotalPipe } from './pipes/total.pipe';

@NgModule({
  declarations: [TotalPipe, StateDirective, TableauComponent, BoutonComponent, FormulaireComponent,
    FormValidationDirective],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    TemplateModule
  ],
  exports: [TotalPipe, StateDirective, TableauComponent, BoutonComponent, FormulaireComponent,
    TemplateModule, FormValidationDirective]
})
export class SharedModule { }
