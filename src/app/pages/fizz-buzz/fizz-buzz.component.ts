import { Component, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { CommonService } from '../../services/common.service';

@Component({
    selector: 'ul-page-fizz-buzz',
    templateUrl: './fizz-buzz.component.html',
    styleUrls: ['./fizz-buzz.component.scss']
})
export class FizzBuzzComponent implements OnDestroy {
    subs: Record<string, Subscription> = {};
    fizzBuzzOutput: Array<string> = [];

    constructor(private cService: CommonService) {}

    startFizzBuzz() {
        const countFrom: number = 1;
        const countTo: number = 100;

        this.stopFizzBuzz(true);

        this.subs.counter = this.cService.beginCount(countFrom, countTo).subscribe({
            next: (response) => {
                const isDivisibleByThree = this.isDivisibleBy(response, 3);
                const isDivisibleByFive = this.isDivisibleBy(response, 5);

                switch (true) {
                    case isDivisibleByThree && isDivisibleByFive:
                        this.fizzBuzzOutput.push('FizzBuzz');
                        console.log('FizzBuzz', response);
                        break;
                        
                    case isDivisibleByThree:
                        this.fizzBuzzOutput.push('Fizz');
                        console.log('Fizz', response);
                        break;

                    case isDivisibleByFive:
                        this.fizzBuzzOutput.push('Buzz');
                        console.log('Buzz', response);
                        break;
                
                    default:
                        this.fizzBuzzOutput.push(response.toString());
                        console.log('Count', response);
                        break;
                }

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

    private isDivisibleBy(value: number, testFor: number): boolean {
        const result = value / testFor;
        return !result.toString().includes('.');
    }

    ngOnDestroy(): void {
        this.cService.releaseMultipleSubscriptions(this.subs);
    }
}