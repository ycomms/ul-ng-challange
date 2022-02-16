import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

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
        ])
    ]
})
export class FactorialModule { }