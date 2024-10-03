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
                borderColor: '#5413D6',
                tension: 0.6
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
      <div className='card-dashbord p-4 mt-4 row mx-0'>
        <div className='col-md-12'>
      {/* <div className='text-pie-chart'>{name}</div> */}
        <div className='head-chart-title'>{name}</div>
         <div className='mt-2 head-chart-total'>Total : 42</div>
        </div>
        <div className='col-md-12'>
            <Line data={data} options={options}/>
        </div>
    </div>
    );
};

export default Chart;
