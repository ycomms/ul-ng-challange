import { Component, Input } from "@angular/core";
import { Observable } from "rxjs";
import { NavData, navData } from "src/app/data/nav-data";

@Component({
    selector: 'ul-comp-page-template',
    templateUrl: './page-template.component.html',
    styleUrls: ['./page-template.component.scss']
})
export class PageTemplateComponent {
    navData: Array<NavData> = navData;
    currentNav: Partial<NavData> = {};

    @Input() isMobileViewport: Observable<boolean> | undefined;

    navigationChanged(navEvent: Partial<NavData>) {
        this.currentNav = navEvent;
    }
}