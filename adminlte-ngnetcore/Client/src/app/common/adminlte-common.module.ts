import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AsidebarComponent } from './asidebar/asidebar.component';
import { LayoutSettingsComponent } from './asidebar/layout-settings.component';
import { SkinSettingsComponent } from './asidebar/skin-settings.component';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        SidenavComponent,
        LayoutSettingsComponent,
        SkinSettingsComponent,
        AsidebarComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        SidenavComponent,
        AsidebarComponent,
        RouterModule
    ],
    providers: [

    ]
})

export class AdminLTECommonModule
{

}
