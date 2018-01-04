import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { Home1Service } from './home1.service';

import { Home1Component } from './home1.component';

@NgModule({
    declarations: [
        Home1Component
    ],
    imports: [
        RouterModule.forChild([{ path: '', component: Home1Component }])
    ],
    exports: [
        Home1Component
    ],
    providers: [
        Home1Service
    ]
})

export class Home1Module
{

}
