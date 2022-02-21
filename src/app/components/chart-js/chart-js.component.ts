import { 
    Component, ElementRef, Input, OnInit, ViewChild, OnDestroy 
} from "@angular/core";

import { 
    Chart, ChartConfiguration,
    LinearScale, CategoryScale, BarController, BarElement,
    DoughnutController, ArcElement,
    ScatterController, PointElement, LineElement
} from 'chart.js';

@Component({
    selector: 'ul-comp-chart-js',
    template: `
    <div>
        <canvas #chartCanvas></canvas>
    </div>
    `,
    styles: [`
        canvas {
            margin: 10px 20px 10px 20px;
            width: 100%;
        }
    `]
})
export class ChartJsComponent implements OnInit, OnDestroy {
    chartImports = [
        LinearScale, BarController, CategoryScale, BarElement,
        DoughnutController, ArcElement,
        ScatterController, PointElement, LineElement
    ];

    @ViewChild('chartCanvas', { static: true })
    chartElement: ElementRef | undefined;

    
    @Input() chartData: ChartConfiguration = {} as ChartConfiguration;

    constructor() {
        Chart.register(...this.chartImports);
        Chart.defaults.font.size = 12
        Chart.defaults.color = '#fff'
    }

    ngOnInit(): void {
        this.renderChart();
    }

    private renderChart() {
        const render = 
            new Chart(this.chartElement?.nativeElement, 
            this.chartData);
    }

    ngOnDestroy(): void {
        Chart.unregister(...this.chartImports);
    }
}