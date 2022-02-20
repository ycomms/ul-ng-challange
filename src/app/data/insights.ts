const labels = months({count: 7});

export const dashboardCharts = [
    // Doughnut Chart
    {
        type: 'doughnut',
        data: {
            labels: [
              'Red',
              'Blue',
              'Yellow'
            ],
            datasets: [{
              label: 'My First Dataset',
              data: [12347, 23009, 20129, 15825],
              backgroundColor: [
                '#F4EEBF',
                '#83FCFF',
                '#5E98D2',
                '#C39AE5'
              ],
              hoverOffset: 4
            }]
        },
        // TODO: Look into this later
        options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Chart.js Doughnut Chart'
              }
            }
        }
    },

    // Bar Chart 
    {
        type: 'bar',
        data: {
            labels: ['USA', 'Europe', 'Asia', 'Africa'],
            datasets: [{
                label: '# of Votes',
                data: [33000, 45000, 36000, 12000],
                backgroundColor: [ // <-- TODO: How to use gradient here without hacking
                    '#4EAEAA',
                    '#4EAEAA',
                    '#4EAEAA',
                    '#4EAEAA'
                ]
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    },

    // Scattered Chart
    {
        type: 'scatter',
        data: {
            datasets: [{
              label: 'Scatter Dataset',
              data: [{
                x: -10,
                y: 0
              }, {
                x: 0,
                y: 10
              }, {
                x: 10,
                y: 5
              }, {
                x: 0.5,
                y: 5.5
              }],
              backgroundColor: '#4EAEAA'
            }],
        },
        options: {
          scales: {
            x: {
              type: 'linear',
              position: 'bottom'
            }
          }
        }
    },

    // Line Chart
    {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
              label: 'My First Dataset',
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1
            }]
        }
    }
];


// Helper - For demo only
function months(config: Record<string, number>) {
    const MONTHS = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    var cfg = config || {};
    var count = cfg.count || 12;
    var section = cfg.section;
    var values = [];
    var i, value;
  
    for (i = 0; i < count; ++i) {
      value = MONTHS[Math.ceil(i) % 12];
      values.push(value.substring(0, section));
    }
  
    return values;
}