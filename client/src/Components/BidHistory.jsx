
// export default BidHistory;
import React, { useState } from 'react';
import './BidsHistory.css';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
const BidHistory = ({ bidsHistory }) => {
  const { loginWithRedirect,isAuthenticated,logout } = useAuth0();
  const [expandedBid, setExpandedBid] = useState(null);
  const toggleDetails = (bidId) => {
    setExpandedBid(expandedBid === bidId ? null : bidId);
  };
  return (
    <div className='bids_container'>
      <nav className="Bids_NavBar">
        <ul>
          <div className="logo">
              <img src="src/assets/wallmartlogo.png" alt="walmmartlogo" height="50"/>
          </div>
          <Link to="/farmerHomePage" ><li><a href="/home">Home</a></li></Link>
          <Link to="/BidHistory"><li><a href="/MyBids">Bids</a></li></Link>
          <li><a href="/Profile">Profile</a></li>
          <Link to="NotificationPage"><li><a href="/notification">Notifications</a></li></Link>
          {isAuthenticated ? (
            <li>
              <button className="farmer_Login_btn" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                Log Out
              </button>
            </li>
          ) : (
            <li>
              <button className="farmer_Login_btn" onClick={() => loginWithRedirect()}>
                Log In
              </button>
            </li>
          )}
        </ul>
      </nav>
      <div className="bid-history-page">
        <h2 id="h22">Bid History</h2>
        < div className="bid-table">
          <div className="bid-header">
            <div className="bid-header-item">ID</div>
            <div className="bid-header-item">Status</div>
            <div className="bid-header-item">Total Amount</div>
            <div className="bid-header-item">Date</div>
          </div>

          {bidsHistory && bidsHistory.length > 0 ? (
            bidsHistory.map((bid) => (
              <div key={bid.id} className="bid-row" onClick={() => toggleDetails(bid.id)}>
                <div className="bid-summary">
                  <div className="bid-summary-item">{bid.id}</div>
                  <div className="bid-summary-item">{bid.status}</div>
                  <div className="bid-summary-item">{bid.totalAmount}</div>
                  <div className="bid-summary-item">{bid.date}</div>
                </div>
                {expandedBid === bid.id && (
                  <div className="bid-details">
                    <p><strong>Buyer:</strong> {bid.buyer}</p>
                    <p><strong>Crop:</strong> {bid.crop}</p>
                    <p><strong>Amount:</strong> {bid.totalAmount}</p>
                    <p><strong>Date:</strong> {bid.date}</p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <p>No bids available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BidHistory;
