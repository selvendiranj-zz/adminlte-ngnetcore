import { Component } from '@angular/core';
import { routes } from './sidenav.routes';

@Component({
    selector: 'adminlte-sidenav',
    templateUrl: './sidenav.component.html'
})

export class SidenavComponent
{
    public menuItems: any[] = routes;
}
