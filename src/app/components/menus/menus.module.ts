import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenusComponent } from './menus.component';
import { SimulationComponent } from './simulation/simulation.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { DocumentsComponent } from './documents/documents.component';
import { RecapitulationComponent } from './recapitulation/recapitulation.component';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    SimulationComponent,
    FormulaireComponent,
    DocumentsComponent,
    RecapitulationComponent,
  ],
  imports: [
    CommonModule,
    DropdownModule,
    RouterModule.forChild([
        {path:'',component: MenusComponent, children:[
				// {path:'', redirectTo: 'personal', pathMatch: 'full'},
				// {path: 'personal', component: PersonalComponent},
        {path:'', redirectTo: 'simulateur', pathMatch: 'full'},
				{path: 'simulateur', component: SimulationComponent},
				{path: 'formulaire', component: FormulaireComponent},
				{path: 'documents', component: DocumentsComponent},
				{path: 'recapitulation', component: RecapitulationComponent}
        ]}
    ])
  ],
  exports: [RouterModule]
})
export class MenusModule { }
