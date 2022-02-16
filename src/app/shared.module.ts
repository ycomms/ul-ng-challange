// -- MODULES --
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// -- COMPONENTS --
import { PageTemplateComponent } from './components/page-template/page-template.component';

@NgModule({
    imports:      [ 
        CommonModule
    ],
    declarations: [ 
        // -- COMPONENTS --
        PageTemplateComponent
    ],
    exports:      [ 
        // -- COMPONENTS --
        PageTemplateComponent
    ]
})
export class SharedModule {}