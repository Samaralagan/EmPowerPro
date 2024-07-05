import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct'],
        datasets: [
            {
                label: 'Attendance Percentage',
                data: [95, 80, 55, 88, 58, 70, 24, 85, 84, 40],
                borderColor: '#1E98BE',
                backgroundColor: 'rgba(30, 152, 190, 0.2)', // semi-transparent fill
                tension: 0.4,
                borderWidth: 1, // Reduced border width
                pointRadius: 3, // Adjusted point size
                pointBackgroundColor: '#1E98BE',
                pointBorderColor: '#FFFFFF',
                pointHoverRadius: 6,
            }
        ]
    };

    const options = {
        plugins: {
            legend: {
                display: false,
                labels: {
                    color: '#000F44',
                    font: {
                        size: 11,
                        weight: 'bold',
                    }
                }
            },
            tooltip: {
                backgroundColor: '#1E98BE',
                titleColor: '#FFFFFF',
                bodyColor: '#FFFFFF',
                titleFont: {
                    size: 12,
                    weight: 'bold',
                },
                bodyFont: {
                    size: 12,
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    font: {
                        size: 8,
                        weight: 'bold',
                    },
                    color: '#000F44',
                },
                grid: {
                    display: true,
                    borderDash: [5, 5],
                    color: 'rgba(0, 15, 68, 0.1)',
                }
            },
            y: {
                min: 0,
                max: 100,
                ticks: {
                    stepSize: 25,
                    callback: function(value) {
                        return value + '%';
                    },
                    font: {
                        size: 8,
                        weight: 'bold',
                    },
                    color: '#000F44',
                },
                grid: {
                    display: true,
                    borderDash: [5, 5],
                    color: 'rgba(0, 15, 68, 0.1)',
                }
            }
        }
    };

    return <Line data={data} options={options} />;
};

export default LineChart;
