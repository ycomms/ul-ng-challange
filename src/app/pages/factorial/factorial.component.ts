import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { debounceTime } from "rxjs/operators";

@Component({
    selector: 'ul-page-factorial',
    templateUrl: './factorial.component.html',
    styleUrls: ['./factorial.component.scss']
})
export class FactorialComponent implements OnInit {
    factorialOutput: Array<string> = [];
    factorialForm: FormGroup = new FormGroup({});
    validationMessage: string = '';

    constructor() {
        this.initializeForm();
    }

    ngOnInit(): void {
        this.monitorFormChanges();
    }

    private initializeForm() {
        this.factorialForm = new FormGroup({
            factorialInput: new FormControl(null)
        });
    }

    private monitorFormChanges() {
        this.factorialForm.valueChanges.pipe(debounceTime(1500)).subscribe({
            next: (formData: { factorialInput: string }) => {
                this.factorialOutput = [];
                this.validationMessage = '';

                const input = formData.factorialInput;
                const invalidInput = Number.isNaN(Number(input));

                if (invalidInput) {
                    this.validationMessage = 'Invalid Input'
                }
                else {
                    const output = this.calculateFactorialOf(Number(input));

                    if (input && output !== undefined) {
                        this.factorialOutput = [output.toString()];
                    }
                }

            }
        });
    }

    private calculateFactorialOf(value: number): number | undefined {
        let factorialOutcome: number = 1;

        for (let i = 2; i <= value; i++) {
            factorialOutcome = factorialOutcome * i;
        }

        return factorialOutcome;
    }
}