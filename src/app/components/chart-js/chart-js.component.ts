import { 
    Component, ElementRef, Input, OnInit, ViewChild, OnDestroy 
} from "@angular/core";

// Now supports tree shaking
import { 
    Chart, ChartConfiguration,
    LinearScale, CategoryScale, BarController, BarElement,
    DoughnutController, ArcElement,
    ScatterController, PointElement, LineElement
} from 'chart.js';

interface DoughnutText { 
    color: string; 
    font: string; 
    dataColor: string;
    dataFontSize: string;
}

@Component({
    selector: 'ul-comp-chart-js',
    template: `
    <div style="height: 250px;">
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
        if (this.chartData.type === 'doughnut') {

            const font = 'Arial';
            const textSettings: DoughnutText = {
                color: '#fff',
                font: `15px ${font}`,
                dataColor: '#C5F8FF',
                dataFontSize: `12px ${font}`
            };

            const labelLinesPlugin = {
                id: 'doughnutChartLabelsLine',
                afterDraw: (chart: any, args: any, options: any) => {
                    this.customDoughnutPlugin(chart, textSettings);
                }
            };

            const render = 
                new Chart(this.chartElement?.nativeElement, {
                    plugins: [labelLinesPlugin],
                    options: this.chartData.options,
                    data: this.chartData.data,
                    type: this.chartData.type
                });
        }
        else {
            const render = 
                new Chart(this.chartElement?.nativeElement, 
                this.chartData);
        }
    }

    // NOTE: Label plugin not properly adjusted for responsiveness
    private customDoughnutPlugin(chart: any, textSettings: DoughnutText) {
        const { 
            ctx, 
            chartArea: { top, bottom, left, right, width, height }
        } = chart;

        chart.data.datasets.forEach((dataset: any, key: number) => { 
            chart.getDatasetMeta(key).data.forEach((dataPoint: any, index: number) => {
                let { x, y } = dataPoint.tooltipPosition();

                // Lines
                const smallerWidth = width / 2;
                const smallerHeight = height / 2;

                // Modify starting pos
                const xPosOffset = 25;
                x = (x >= smallerWidth) ? x + xPosOffset : x - xPosOffset;

                // Lines
                const xLine = (x >= smallerWidth) ? x + 15 : x - 15;
                const yLine = (y >= smallerHeight) ? y + 15 : y - 15;
                const bentLine = (x >= smallerWidth) ? 55 : -150

                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(xLine, yLine);
                ctx.lineTo(xLine + bentLine, yLine);
                ctx.strokeStyle = textSettings.color;
                ctx.stroke();

                // Texts
                if (chart.data.labels) {
                    const textWidth = ctx.measureText(chart.data.labels[index]).width;
                    ctx.font = textSettings.font;
                    ctx.fillStyle = textSettings.color;
                    ctx.textAlign = (x >= smallerWidth) ? 'left' : 'right';

                    // Top Text
                    const xTopTextLine = xLine;
                    const yTopTextLine = yLine - 8;
                    ctx.fillText(chart.data.labels[index], xTopTextLine, yTopTextLine);

                    // Bottom Text
                    ctx.font = textSettings.dataFontSize;
                    ctx.fillStyle = textSettings.dataColor;

                    const xBottomTextLine = xLine;
                    const yBottomTextLine = (y >= smallerWidth) ? yLine - 8 : yLine + 18;
                    ctx.fillText(dataset.data[index], xBottomTextLine, yBottomTextLine);
                }
            });
        });
    }

    ngOnDestroy(): void {
        Chart.unregister(...this.chartImports);
    }
}