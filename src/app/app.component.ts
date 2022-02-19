import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'ul-ng-challenge';

  constructor(
    private breakpointObserver: BreakpointObserver,
    private cService: CommonService
  ) {

    this.breakpointObserver.observe([
      Breakpoints.HandsetLandscape, Breakpoints.HandsetPortrait
    ])
    .subscribe(() => this.cService.matchViewportBreakpoint());

  }
}
