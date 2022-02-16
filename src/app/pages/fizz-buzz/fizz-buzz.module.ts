import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared.module';

import { FizzBuzzComponent } from './fizz-buzz.component';

@NgModule({
    declarations: [
        FizzBuzzComponent
    ],
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: FizzBuzzComponent
            }
        ]),

        SharedModule
    ]
})
export class FizzBuzzModule { }