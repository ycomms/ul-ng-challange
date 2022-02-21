import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { debounceTime } from "rxjs/operators";

import { CommonService } from '../../services/common.service';

@Component({
    selector: 'ul-page-factorial',
    templateUrl: './factorial.component.html',
    styleUrls: ['./factorial.component.scss']
})
export class FactorialComponent implements OnInit {
    factorialOutput: Array<string> = [];
    factorialForm: FormGroup = new FormGroup({});
    validationMessage: string = '';

    constructor(private cService: CommonService) {
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
        this.factorialForm.valueChanges.pipe(debounceTime(1000)).subscribe({
            next: (formData: { factorialInput: string }) => {
                this.factorialOutput = [];
                this.validationMessage = '';

                const input = formData.factorialInput;
                const invalidInput = Number.isNaN(Number(input));

                if (invalidInput) {
                    this.validationMessage = 'Invalid Input'
                }
                else {
                    const output = this.cService.calculateFactorialOf(Number(input));

                    if (input && output !== undefined) {
                        this.factorialOutput = [output.toString()];
                    }
                }

            }
        });
    }

}