import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared.module';

import { DashboardComponent } from './dashboard.component';
import { ChartJsComponent } from '../../components/chart-js/chart-js.component';

@NgModule({
    declarations: [
        DashboardComponent,
        ChartJsComponent
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