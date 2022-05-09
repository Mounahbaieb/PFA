import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';

@Component({
    templateUrl: './menus.component.html',
    encapsulation: ViewEncapsulation.None
})
export class MenusComponent implements OnInit {

    breadcrumbItems: MenuItem[];

    tieredItems: MenuItem[];

    items: MenuItem[];

    routeItems: MenuItem[];

    megaMenuItems: MegaMenuItem[];

    panelMenuItems: MenuItem[];

    stepsItems: MenuItem[];

    slideItems: MenuItem[];

    menuItems: MenuItem[];

    plainMenuItems: MenuItem[];

    pageIndex: number = 0;

    ngOnInit() {
        this.routeItems = [
            {label: 'Simulateur de Financement', routerLink:'simulateur'},
            {label: 'Remplir le formulaire', routerLink:'formulaire'},
            {label: 'charger des documents', routerLink:'documents'},
            {label: 'recapitulation', routerLink:'recapitulation'},
        ];
    }
}
