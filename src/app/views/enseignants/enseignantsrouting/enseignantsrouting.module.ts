import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EnseignantsAjouterComponent } from '../enseignants-ajouter/enseignants-ajouter.component';
import { EnseignantsModifierComponent } from '../enseignants-modifier/enseignants-modifier.component';


const routes: Routes = [
  {
    path: 'enseignants',
    data: {
      title: 'enseignants'
    },
    children: [
      {
        path: 'enseignantsAjouter',
        component: EnseignantsAjouterComponent,
        data: {
          title: 'enseignantsAjouter'
        }
      },
      {
        path: 'enseignantsModifier',
        component: EnseignantsModifierComponent,
        data: {
          title: 'enseignantsModifier'
        }
      }
    ]
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnseignantsroutingModule { }
