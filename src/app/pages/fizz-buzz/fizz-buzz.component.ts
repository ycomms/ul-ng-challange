import { Component, OnDestroy } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { CommonService } from '../../services/common.service';


@Component({
    selector: 'ul-page-fizz-buzz',
    templateUrl: './fizz-buzz.component.html',
    styleUrls: ['./fizz-buzz.component.scss']
})
export class FizzBuzzComponent implements OnDestroy {
    subs: Record<string, Subscription> = {};
    fizzBuzzOutput: Array<string> = [];

    isMobileViewport$: Observable<boolean>;

    constructor(private cService: CommonService) {
        this.isMobileViewport$ = this.cService.isMobileViewport$;
    }

    startFizzBuzz() {
        const countFrom: number = 1;
        const countTo: number = 100;

        this.stopFizzBuzz(true);

        this.subs.counter = this.cService.beginCount(countFrom, countTo).subscribe({
            next: (value: number) => {
                const fizzBuzzValue = this.cService.getFizzBuzzOrValue(value);
                this.fizzBuzzOutput.push(fizzBuzzValue);
            },

            error: () => {
                this.stopFizzBuzz();
            },

            complete: () => {
                this.stopFizzBuzz();
            }
        });
    }

    stopFizzBuzz(clearData: boolean = false) {
        if (this.subs.counter) {
            this.subs.counter.unsubscribe();
        }
        
        if (clearData) { this.fizzBuzzOutput = []; }
    }

    ngOnDestroy(): void {
        this.cService.releaseMultipleSubscriptions(this.subs);
    }
}