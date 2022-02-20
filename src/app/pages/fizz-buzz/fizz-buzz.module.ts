import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared.module';

import { FizzBuzzComponent } from './fizz-buzz.component';
import { UlButtonComponent } from '../../components-xs/ul-comp-button.component';

@NgModule({
    declarations: [
        FizzBuzzComponent,
        UlButtonComponent
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