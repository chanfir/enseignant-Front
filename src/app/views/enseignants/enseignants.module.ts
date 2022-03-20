import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnseignantsAjouterComponent } from './enseignants-ajouter/enseignants-ajouter.component';
import { EnseignantsroutingModule } from './enseignantsrouting/enseignantsrouting.module';
import { EnseignantsModifierComponent } from './enseignants-modifier/enseignants-modifier.component';



@NgModule({
  declarations: [
    EnseignantsAjouterComponent,
    EnseignantsModifierComponent
  ],
  imports: [
    CommonModule,
    EnseignantsroutingModule
  ]
})
export class EnseignantsModule { }
