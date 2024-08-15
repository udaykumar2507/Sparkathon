import React, { useState } from "react";
import './FarmerHomepage.css';
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useNavigate } from "react-router-dom";

function FarmerHomePage() {
    const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
    const [showLoginPrompt, setShowLoginPrompt] = useState(false);
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        if (isAuthenticated) {
            navigate(path);
        } else {
            setShowLoginPrompt(true);
        }
    };

    const handleClosePrompt = () => {
        setShowLoginPrompt(false);
    };

    return (
        <div className="farmer_hp_container">
            <div className="Hp_NavBar">
                <li>
                    <ul id="ul"><a href="#" onClick={() => handleNavigation('/farmerHomePage')}>Home</a></ul>
                    <ul id="ul"><a href="#" onClick={() => handleNavigation('/BidHistory')}>MyBids</a></ul>
                    <ul id="ul"><a href="/Profile">Profile</a></ul>
                    <ul id="ul"><a href="#" onClick={() => handleNavigation('/NotificationPage')}>Notifications</a></ul>
                    {isAuthenticated ? (
                        <ul>
                            <button className="farmer_Login_btn" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                Log Out
                            </button>
                        </ul>
                    ) : (
                        <ul>
                            <button className="farmer_Login_btn" onClick={() => loginWithRedirect()}>Log In</button>
                        </ul>
                    )}
                </li>
            </div>
            <div className="farmer_hp_Slogan">
                <h1 className="h11">Where <p id="farmer">Farmer</p> Meet the Market:</h1>
                <h1 className="h11">Bids Made Simple</h1>
            </div>
            {showLoginPrompt && (
                <div className="login_prompt">
                    <p>Please log in first.</p>
                    <button onClick={handleClosePrompt}>Close</button>
                </div>
            )}
        </div>
    );
}

export default FarmerHomePage;
