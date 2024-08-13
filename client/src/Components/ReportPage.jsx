import React, { useState } from 'react';
import './ReportPage.css';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import ReactApexChart from 'react-apexcharts';

const ReportPage = () => {
    const [state, setState] = useState({
        pie: {
            series: [25, 15, 44, 55, 41, 17],
            options: {
                chart: {
                    width: '100%',
                    height: '100%',
                    type: 'pie',
                },
                labels: [
                    'Rice',
                    'Cooking Oil',
                    'Wheat Flour',
                    'Pulses(Lentils)',
                    'Sugar',
                    'Milk Powder',
                ],
                theme: {
                    monochrome: {
                        enabled: true,
                    },
                },
                plotOptions: {
                    pie: {
                        dataLabels: {
                            offset: -5,
                        },
                    },
                },
                grid: {
                    padding: {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                    },
                },
                dataLabels: {
                    formatter(val, opts) {
                        const name = opts.w.globals.labels[opts.seriesIndex];
                        return [name, val.toFixed(1) + '%'];
                    },
                },
                legend: {
                    show: false,
                },
            },
        },
        marker: {
            series: [{
                name: 'Availability',
                data: [10, 15, 20, 25, 30, 35, 40]
            }],
            options: {
                chart: {
                    type: 'line',
                    height: '150px',
                },
                stroke: {
                    width: 2,
                },
                markers: {
                    size: 5,
                },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                },
                yaxis: {
                    title: {
                        text: 'Availability (units)',
                    },
                },
                grid: {
                    padding: {
                        left: 0,
                        right: 0,
                    },
                },
                tooltip: {
                    enabled: true,
                },
            },
        },
    });

    const bardata = [
        { name: "Rice", Required: 10000, Available: 13000 },
        { name: "Wheat", Required: 8000, Available: 11000 },
        { name: "Sugar", Required: 5000, Available: 5300 },
        { name: "Spices", Required: 700, Available: 650 },
        { name: "Tea", Required: 2500, Available: 2300 },
    ];

    return (
        <>
            <nav className="navbar">
                <div className="navbar-logo">
                    <img src="src/assets/wallmartlogo.png" alt="Logo" />
                </div>
                <div className="navbar-links">
                    <a href="#home">Home</a>
                    <a href="#report">Report</a>
                    <a href="#profile">Profile</a>
                    <a href="#login">Login</a>
                </div>
            </nav>
            <div className="chart-container">
                <div className="top-charts">
                    <div className="Barchart-container">
                        <h2>Required vs Availability</h2>
                        <BarChart width={500} height={300} data={bardata}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="Required" fill="#8884d8" />
                            <Bar dataKey="Available" fill="#82ca9d" />
                        </BarChart>
                    </div>
                    <div className="MarkerChart-container">
                    <h2>Availability of Rice Over Time</h2>
                    <ReactApexChart options={state.marker.options} series={state.marker.series} type="line" height="150px" />
                    </div>
                </div>
                <div className="DonutPieChart">
                        <h2>High Priority Crops</h2>
                        <ReactApexChart options={state.pie.options} series={state.pie.series} type="pie" height="300px" width="300px" />
                </div>
            </div>
        </>
    );
};

export default ReportPage;
