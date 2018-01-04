import { Component, AfterViewInit } from '@angular/core';
import { Home2Service } from './home2.service';


@Component({
    selector: 'adminlte-home1',
    templateUrl: './home2.component.html'
})

export class Home2Component implements AfterViewInit
{
    private home1Svc: Home2Service;

    public constructor(home1Svc: Home2Service)
    {
        this.home1Svc = home1Svc;
    }

    public ngAfterViewInit(): void
    {
        this.home1Svc.Init();
    }
}
