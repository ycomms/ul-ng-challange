import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared.module';

import { DashboardComponent } from './dashboard.component';

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: DashboardComponent
            }
        ]),

        SharedModule
    ]
})
export class DashboardModule { }