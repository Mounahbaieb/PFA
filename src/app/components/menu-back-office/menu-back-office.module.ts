import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatistiqueComponent } from './statistique/statistique.component';
import { MenuBackOfficeComponent } from './menu-back-office.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    StatistiqueComponent,
    MenuBackOfficeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
        {path:'',component: MenuBackOfficeComponent, children:[
        {path:'', redirectTo: 'statistique', pathMatch: 'full'},
        {path: 'statistique', component: StatistiqueComponent},
        ]}
    ])
    ]

})
export class MenuBackOfficeModule { }
