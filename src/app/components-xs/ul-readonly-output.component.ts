import { Component, Input } from "@angular/core";

@Component({
    selector: 'ul-comp-readonly-output',
    template: `
    <div class="readonly-output" 
        [style.background-color]="bgColor"
        [style.width]="width"
        [style.min-height]="height">
        <p *ngFor="let text of texts">{{ text }}</p>
    </div>
    `,
    styles: [`
    .readonly-output {
        font-size: 25px;
        padding: 10px;
        max-height: 45vh;
        overflow-y: auto;

        box-shadow: 0 2px 4px 0 rgba(142,173,165,0.50), inset 0 1px 3px 0 rgba(0,0,0,0.50);
        border-radius: 5px;
        border-radius: 5px;
    }
    `]
})
export class UlReadonlyOutputComponent {
    @Input() bgColor: string = 'rgba(18,43,60,0.50)';
    @Input() width: string = '561px';
    @Input() height: string = '71px';

    @Input() texts: Array<string> = []
}