import { Injectable } from "@angular/core";
import { BreakpointObserver } from '@angular/cdk/layout';
import { BehaviorSubject, Observable, Subscription, timer } from "rxjs";
import { map, take } from 'rxjs/operators';
import { BigNumber } from 'bignumber.js';

enum UlBreakpoints {
    mobile = '(min-width: 0) and (max-width: 720px)',
}

export enum FizzBuzz {
    fizz = 'Fizz',
    buzz = 'Buzz',
    fizzBuzz = 'FizzBuzz'
}

@Injectable({ providedIn: 'root' })
export class CommonService {

    private _isMobileViewport =  new BehaviorSubject(false);
    isMobileViewport$ = this._isMobileViewport.asObservable();

    counter$ = new Observable();

    constructor(private bPointObserver: BreakpointObserver) {}

    matchViewportBreakpoint() {
        const isMobileViewport: boolean 
            = this.bPointObserver.isMatched(UlBreakpoints.mobile);

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

    getFizzBuzzOrValue(value: number): string {
        let fizzBuzzValue: string = '';

        const isDivisibleByThree = this.isDivisibleBy(value, 3);
        const isDivisibleByFive = this.isDivisibleBy(value, 5);

        switch (true) {
            case isDivisibleByThree && isDivisibleByFive:
                fizzBuzzValue = FizzBuzz.fizzBuzz;
                break;
                
            case isDivisibleByThree:
                fizzBuzzValue = FizzBuzz.fizz;
                break;

            case isDivisibleByFive:
                fizzBuzzValue = FizzBuzz.buzz
                break;
        
            default:
                fizzBuzzValue = value.toString();
                break;
        }

        return fizzBuzzValue;
    }

    private isDivisibleBy(value: number, testFor: number): boolean {
        const result = value / testFor;
        return !result.toString().includes('.');
    }

    // NOTE: For a real project, this would need to work with BigNumbers
    // and programmed to be efficient
    calculateFactorialOf(value: number): number {
        let factorialOutcome: number = 1;

        for (let i = 2; i <= value; i++) {
            factorialOutcome = factorialOutcome * i;
        }

        return factorialOutcome;
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