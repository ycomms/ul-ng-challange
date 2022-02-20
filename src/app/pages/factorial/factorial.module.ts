import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

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

        SharedModule,
        ReactiveFormsModule
    ]
})
export class FactorialModule { }