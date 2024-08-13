import React from 'react';
import './ReportPage.css';

const ReportPage = () => {
    return (
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
    );
}

export default ReportPage;
