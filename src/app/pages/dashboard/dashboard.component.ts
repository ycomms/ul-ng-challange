import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { CommonService } from 'src/app/services/common.service';

import { ChartConfiguration } from 'chart.js';
import { dashboardCharts } from '../../data/insights';

@Component({
    selector: 'ul-page-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    dashboardCharts$: Observable<Array<ChartConfiguration>> | undefined;
    isMobileViewport$: Observable<boolean> | undefined;
    
    constructor(public cService: CommonService) {
        this.isMobileViewport$ = this.cService.isMobileViewport$;
    }

    ngOnInit(): void {
        this.dashboardCharts$ = of(dashboardCharts) as Observable<Array<ChartConfiguration>>;
    }
}