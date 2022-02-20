import { Injectable } from "@angular/core";
import { BreakpointObserver } from '@angular/cdk/layout';
import { BehaviorSubject, Observable, Subject, Subscription, timer } from "rxjs";
import { map, switchMap, take, takeUntil, tap } from 'rxjs/operators';

enum ulBreakpoints {
    mobile = '(min-width: 0) and (max-width: 610px)',
}

@Injectable({ providedIn: 'root' })
export class CommonService {

    private _isMobileViewport =  new BehaviorSubject(false);
    isMobileViewport$ = this._isMobileViewport.asObservable();

    counter$ = new Observable();

    constructor(private bPointObserver: BreakpointObserver) {}

    matchViewportBreakpoint() {
        const isMobileViewport: boolean 
            = this.bPointObserver.isMatched(ulBreakpoints.mobile);

        this._isMobileViewport.next(isMobileViewport);
    }

    beginCount(countFrom: number, countTo: number, 
        delayMs: number = 0, intervalMs: number = 1000) {
        const totalTake = (countTo + 1) - countFrom;

        return timer(delayMs, intervalMs).pipe(
            map(i => countFrom + i),
            take(totalTake)
        );
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