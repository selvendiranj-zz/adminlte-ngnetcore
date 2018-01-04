import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppService } from './shared/app.service';
import { AppSettingService } from './shared/setting.service';

@Component({
    selector: 'adminlte-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements OnInit, AfterViewInit
{
    private appSvc: AppService;
    private setSvc: AppSettingService;

    public constructor(appSvc: AppService, setSvc: AppSettingService)
    {
        this.appSvc = appSvc;
        this.setSvc = setSvc;
    }

    public ngOnInit(): void
    {
        // this.scriptSvc.loadCompScript('AppComponent');
    }

    public ngAfterViewInit(): void
    {
        this.appSvc.Init();
        this.setSvc.Init();
    }
}
