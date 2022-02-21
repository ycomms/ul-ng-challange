import { CommonService, FizzBuzz } from './common.service';
import { TestBed } from '@angular/core/testing';
import { Subscription } from 'rxjs';

describe('CommonService - Count Async', () => {

    let cService: CommonService;
    let originalTimeout: number;
    const subs: Record<string, Subscription> = {};

    const countTo: number = 100;

    const intervalMs: number = 1000;
    const counterTestLimit: number = 110;
    const runCounterTest = countTo <= counterTestLimit;

    beforeEach(() => {
        if (runCounterTest) {
            const gracePeriod: number = 110;
            originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
            jasmine.DEFAULT_TIMEOUT_INTERVAL = (intervalMs * countTo) + gracePeriod;
        }

        TestBed.configureTestingModule({
            providers: [ CommonService ]
        });

        cService = TestBed.inject(CommonService);
    });

    afterEach(() => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

    // TODO: Look into if fakeAsync is a better option here
    it('UL Test - Should count from assigned number to assigned number', (done: any) => {
        if (!runCounterTest) {
            pending();
        }

        const countFrom: number = 0;
        const delayMs: number = 0;

        let countCompare: number = countFrom;

        subs.counterSub = 
        cService.beginCount(countFrom, countTo, delayMs, intervalMs).subscribe({
            next: (count: number) => {

                console.log({ count, countCompare });

                expect(count).toBe(countCompare);
                countCompare++;

                if (countCompare > countTo) { done(); }
            }
        });

        if (countCompare > countTo) { 
            cService.releaseMultipleSubscriptions(subs);
        }
    });
    
});


describe('CommonService - General', () => {

    let cService: CommonService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ CommonService ]
        });

        cService = TestBed.inject(CommonService);
    });

    it('UL Test - Should print the applicable FizzBuzz once per match', () => {
        const testForMultipleOfThreeAndFive = [
            0, 2, 3, 5, 4, 10, 11, 12, 13, 15, 16, 20, 22, 25, 30
        ];

        const expectedOutcome = [
            FizzBuzz.fizzBuzz, '2', FizzBuzz.fizz, FizzBuzz.buzz, '4', FizzBuzz.buzz,
            '11', FizzBuzz.fizz, '13', FizzBuzz.fizzBuzz, '16', FizzBuzz.buzz,
            '22', FizzBuzz.buzz, FizzBuzz.fizzBuzz
        ];

        let outcome: Array<string> = [];

        testForMultipleOfThreeAndFive.forEach((testValue: number) => {
            const result = cService.getFizzBuzzOrValue(testValue);
            outcome.push(result);
        });

        console.log('Expected', expectedOutcome);
        console.log('Outcome.', outcome);

        expect(outcome).toEqual(expectedOutcome);
    });

    it('UL Test - Is expected to calculate the factorial of given number', () => {
        const factorialTests = [0, 1, 2, 5, 10, 200];

        // Testing with JavaScript Number output
        const expectedOutcome = [
            1, 1, 2, 120, 3628800, Infinity
        ];

        let outcome: Array<number> = [];

        factorialTests.forEach((value: number) => {
            const result = cService.calculateFactorialOf(value);
            outcome.push(result);
        });

        console.log('Expected', expectedOutcome);
        console.log('Outcome.', outcome);

        expect(outcome).toEqual(expectedOutcome);
    });
    
});

// TODO: Create more tests if time permits. Check components for coverage