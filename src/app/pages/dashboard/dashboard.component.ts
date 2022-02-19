import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';

import { CommonService } from 'src/app/services/common.service';

import { ChartConfiguration } from 'chart.js';
import { dashboardCharts } from '../../data/insights';

@Component({
    selector: 'ul-page-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
    subs: Record<string, Subscription> = {};

    dashboardCharts$: Observable<Array<ChartConfiguration>> | undefined;
    isMobileViewport: boolean = false;
    
    constructor(public cService: CommonService) {
        this.detectViewportSize();
    }

    ngOnInit(): void {
        this.dashboardCharts$ = of(dashboardCharts) as Observable<Array<ChartConfiguration>>;
    }

    private detectViewportSize() {
        this.subs.mobileViewport = 
        this.cService.isMobileViewport$.subscribe({

            next: (response: boolean) => {
                this.isMobileViewport = response;
            }

        });
    }

    ngOnDestroy(): void {
        this.cService.releaseMultipleSubscriptions(this.subs);
    }
}