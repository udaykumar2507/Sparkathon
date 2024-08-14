import React from "react";
import { useNavigate } from "react-router-dom";
import './RoleSelection.css';
function RoleSelection(){
    const navigate=useNavigate();
    const handleFarmerLogin = () => {
        navigate("/FarmerHomepage");
      };
    
      const handleBuyerLogin = () => {
        navigate('/BuyerHome');
      };
    
    return (
    <>
      <body>
      <div className="bgimg">
           <div className="Choose">
                <h2 className="select-role">Select Your Role</h2>
                <div className="Cards">
                <div className="Farmer-Card">
                <button className="Farmer-btn" onClick={handleFarmerLogin}>
                    <img src="https://www.shutterstock.com/image-vector/farmer-working-on-field-vector-260nw-2194804755.jpg" ></img>
                    <h1> Farmer</h1>
                </button>
                </div>
                <div className="Buyer-Card">
                <button className="Buyer-btn" onClick={handleBuyerLogin}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT88auDAyrJNPOiUZZgSoqFp0P22Spx4bhRGw&s"></img>
                    <h1>Buyer</h1>
                </button>
                </div>
                </div>
           </div>
      </div>
      </body>
    </>
    )
}
export default RoleSelection;