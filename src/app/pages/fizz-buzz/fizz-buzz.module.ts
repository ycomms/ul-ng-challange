import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

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
        ])
    ]
})
export class FizzBuzzModule { }