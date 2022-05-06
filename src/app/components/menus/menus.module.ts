import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PaymentComponent } from './payment.component';
import { SeatComponent } from './seat.component';
import { PersonalComponent } from './personal.component';
import { ConfirmationComponent } from './confirmation.component';
import { MenusComponent } from './menus.component';
import { SimulationComponent } from './simulation/simulation.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { DocumentsComponent } from './documents/documents.component';
import { RecapitulationComponent } from './recapitulation/recapitulation.component';

@NgModule({
  declarations: [
    SimulationComponent,
    FormulaireComponent,
    DocumentsComponent,
    RecapitulationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
        {path:'',component: MenusComponent, children:[
				{path:'', redirectTo: 'personal', pathMatch: 'full'},
				{path: 'personal', component: PersonalComponent},
				{path: 'confirmation', component: ConfirmationComponent},
				{path: 'seat', component: SeatComponent},
				{path: 'payment', component: PaymentComponent}
        ]}
    ])
  ],
  exports: [RouterModule]
})
export class MenusModule { }
