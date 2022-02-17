import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Location } from '@angular/common';

import { NavData } from "src/app/data/nav-data";
import { Router } from "@angular/router";

@Component({
    selector: 'ul-comp-page-nav',
    templateUrl: './page-nav.component.html',
    styleUrls: ['./page-nav.component.scss']
})
export class PageNavComponent implements OnInit {
    @Input() navItems: Array<NavData> = [];
    @Output() navigationChanged = new EventEmitter<Partial<NavData>>();

    constructor(
        private ngLocation: Location,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.identifyCurrentNavOnLoad();
    }

    navigateToPage(currentNav: NavData) {
        if (currentNav && currentNav.routes && !currentNav.selected) {
            const firstRoute = currentNav.routes[0];
            this.router.navigate([firstRoute]);
        }
    }

    private identifyCurrentNavOnLoad() {
        const currentRoute = this.ngLocation.path().replace(/\//g, '');

        if (currentRoute && this.navItems.length) {
            this.navItems.map(nav => nav.selected = nav.routes?.includes(currentRoute));
        }

        const selectedNav = this.navItems.find(nav => nav.selected);
        this.navigationChanged.emit(selectedNav);
    }
}