import React, { useState } from 'react';
import './ReportPage.css';
import { Link } from 'react-router-dom';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import ReactApexChart from 'react-apexcharts';
import { useAuth0 } from "@auth0/auth0-react";

const ReportPage = () => {
    const { loginWithRedirect,isAuthenticated,logout } = useAuth0();
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
                data: [5, 15, 20, 15, 40, 25, 20]
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
        { name: "Rice", Required: 10000, Available: 10000 },
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
        <Link to="/BuyerHome">Home</Link>
        <Link to="/ReportPage">Report</Link>
        <Link to="#profile">Profile</Link>
        {isAuthenticated ? (
            <button className="farmer_Login_btn_" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                Log Out
            </button>
        ) : (
            <button className="farmer_Login_btn_" onClick={() => loginWithRedirect()}>
                Log In
            </button>
        )}
    </div>
</nav>

            <div className="first-section">
                <div className="chart-container">
                    <div className="DonutPieChart">
                        <h2 className='rp-h2'>High Priority Crops</h2>
                        <ReactApexChart options={state.pie.options} series={state.pie.series} type="pie" height="300px" width="300px" />
                    </div>
                    <div className="Barchart-container">
                        <h2 className='rp-h2'>Required vs Availability</h2>
                        <BarChart width={600} height={350} data={bardata}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="Required" fill="#8884d8" />
                            <Bar dataKey="Available" fill="#82ca9d" />
                        </BarChart>
                    </div>
                </div>
            </div>
            <div id="line-chart-section" className="second-section">
                <h2 className='rp-h2'>Availability of Rice Over Time</h2>
                <ReactApexChart options={state.marker.options} series={state.marker.series} type="line" height="400px" width="600px" />
            </div>
        </>
    );
};

export default ReportPage;
