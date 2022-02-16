import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared.module';

import { FactorialComponent } from './factorial.component';

@NgModule({
    declarations: [
        FactorialComponent
    ],
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: FactorialComponent
            }
        ]),

        SharedModule
    ]
})
export class FactorialModule { }