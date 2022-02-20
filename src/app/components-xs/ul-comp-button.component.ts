import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'ul-comp-button',
    template: `
    <button class="ul-button" (click)="ulButtonClicked()"
        [style.background-color]="bgColor">
        {{ label }}
    </button>
    `,
    styles: [`
    .ul-button {
        width: 252px;
        height: 77px;
        color: #fff;
        font-size: 25px;
        cursor: pointer;

        box-shadow: 0 2px 4px 0 rgba(142,173,165,0.50), inset 0 1px 3px 0 rgba(0,0,0,0.50);
        border-radius: 38.5px;
        border-radius: 38.5px;
    }
    `]
})
export class UlButtonComponent {
    @Input() label: string = '';
    @Input() bgColor: string = 'rgba(18,60,20,0.50)';

    @Output() ulClick = new EventEmitter();

    ulButtonClicked() {
        this.ulClick.emit();
    }
}