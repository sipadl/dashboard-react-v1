// src/components/PieChart.js
import React from 'react';
import {Pie} from 'react-chartjs-2';
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import Title from './Title';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
    const data = {
        labels: [
            'Debet/Kredit', 'QRIS', 'E-Money'
        ],
        datasets: [
            {
                label: '# of Votes',
                data: [
                    189, 64, 64
                ],
                backgroundColor: [
                    '#732DFE', '#4CD471', '#FFB323' 
                ],
                // borderColor: [   'rgba(255, 99, 132, 1)',   'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)', ],
                borderWidth: 1
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: false,
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                    }
                }
            }
        }
    };

    return (
        <div className="w-100">
            <div className='text-pie-chart mb-3'>Jumlah Transaksi Per Metode Pembayaran</div>
            <div
                className='d-flex justify-content-center'
                style={{
                    height: '300px',
                    width: '300px',
                    margin: '0 auto', // Centers the chart horizontally
                    display: 'flex', // Ensures flexbox is applied
                    alignItems: 'center' // Centers the chart vertically
                }}>
                <Pie data={data} options={options}/>
            </div>
            <div className="row mx-5 mt-4">
                <div className="col">
                    <div className="d-flex justify-content-center">
                      <div style={{
                              backgroundColor: '#732DFE',
                              width: '10px',
                              height: '10px',
                              borderRadius:50,
                              margin: '4px'
                            }}></div>
                        <div>
                            <div className="text-pembayaran">Debit/Kredit</div>
                            <div className='text-pembayaran-number'>
                                189</div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="d-flex justify-content-center">
                      <div style={{
                            backgroundColor: '#4CD471',
                            width: '10px',
                            height: '10px',
                            borderRadius:50,
                            margin: '4px'
                          }}></div>
                        <div>
                            <div className="text-pembayaran">
                                <span></span>
                                QRIS</div>
                            <div className='text-pembayaran-number'>
                                64</div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="d-flex justify-content-center">
                        <div style={{
                          backgroundColor: '#FFC107',
                          width: '10px',
                          height: '10px',
                          borderRadius:50,
                          margin: '4px'
                        }}></div>
                        <div>
                            <div className="text-pembayaran">
                                E-Money</div>
                            <div className='text-pembayaran-number'>
                                64</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default PieChart;
