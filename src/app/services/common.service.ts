import { Injectable } from "@angular/core";
import { BreakpointObserver } from '@angular/cdk/layout';
import { BehaviorSubject, Subscription } from "rxjs";

enum ulBreakpoints {
    mobile = '(min-width: 0) and (max-width: 610px)',
}

@Injectable({ providedIn: 'root' })
export class CommonService {

    private _isMobileViewport =  new BehaviorSubject(false);
    isMobileViewport$ = this._isMobileViewport.asObservable();

    constructor(private bPointObserver: BreakpointObserver) {}

    matchViewportBreakpoint() {
        const isMobileViewport: boolean 
            = this.bPointObserver.isMatched(ulBreakpoints.mobile);

        this._isMobileViewport.next(isMobileViewport);
    }

    releaseMultipleSubscriptions(subObject: Record<string, Subscription>) {
        for (const sub in subObject) {
          if (sub) {
              const subscription = subObject[sub];
    
              if (subscription) {
                subscription.unsubscribe();
              }
          }
        }
    }
}