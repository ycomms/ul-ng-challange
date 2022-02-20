// -- MODULES --
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// -- COMPONENTS --
import { PageTemplateComponent } from './components/page-template/page-template.component';
import { PageNavComponent } from './components/page-nav/page-nav.component';
import { UlReadonlyOutputComponent } from './components-xs/ul-readonly-output.component';

@NgModule({
    imports:      [ 
        CommonModule
    ],
    declarations: [ 
        // -- COMPONENTS --
        PageTemplateComponent,
        PageNavComponent,
        UlReadonlyOutputComponent
    ],
    exports:      [ 
        // -- COMPONENTS --
        PageTemplateComponent,
        PageNavComponent,
        UlReadonlyOutputComponent,

        // -- MODULES --
        CommonModule
    ]
})
export class SharedModule {}