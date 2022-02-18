// -- MODULES --
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// -- COMPONENTS --
import { PageTemplateComponent } from './components/page-template/page-template.component';
import { PageNavComponent } from './components/page-nav/page-nav.component';

@NgModule({
    imports:      [ 
        CommonModule
    ],
    declarations: [ 
        // -- COMPONENTS --
        PageTemplateComponent,
        PageNavComponent
    ],
    exports:      [ 
        // -- COMPONENTS --
        PageTemplateComponent,
        PageNavComponent,

        // -- MODULES --
        CommonModule
    ]
})
export class SharedModule {}