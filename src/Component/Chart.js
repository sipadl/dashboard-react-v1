// src/components/LineChart.js

import React from 'react';
import {Line} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Chart = ({name}) => {
    const data = {
        labels: [
            'August 29',
            'August 30',
            'August 31',
            'September 1',
            'September 2',
            'September 3'
        ],
        datasets: [
            {
                label: 'Sales',
                data: [
                    150,
                    170,
                    130,
                    190,
                    200,
                    220
                ],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }
        ]
    };

    const options = {
        scales: {
            x: {
                ticks: {
                    autoSkip: false
                }
            },
            y: {
                beginAtZero: true
            }
        }
    };

    return (
      <div className='card-dashbord p-4 mt-4'>
      {/* <div className='text-pie-chart'>{name}</div> */}
    <Line data={data} options={options}/>
    </div>
    );
};

export default Chart;
