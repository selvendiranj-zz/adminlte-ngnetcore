import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavigationEnd, Router } from '@angular/router';
import 'rxjs/add/operator/filter';

import { AdminLTECommonModule } from './common/adminlte-common.module';

import { AppService } from './shared/app.service';
import { routes } from './app.routing';

import { AppComponent } from './app.component';
import { AppSettingService } from './shared/setting.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AdminLTECommonModule,
        RouterModule.forRoot(routes, { useHash: true })
    ],
    providers: [
        AppService, AppSettingService
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule
{
    private router: Router;
    public constructor(router: Router)
    {
        router.events
            .filter((event: any) => event instanceof NavigationEnd)
            .subscribe(this.OnNavigate);
    }

    private OnNavigate(event: NavigationEnd): any
    {
        // We only receive NavigationEnd events
        switch (event.url)
        {
            case '/layouts/boxed':
            default:
                break;
        }
    }
}
