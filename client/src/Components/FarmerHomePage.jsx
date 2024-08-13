import React from "react";
import './FarmerHomepage.css';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
function FarmerHomePage(){
    const { loginWithRedirect,isAuthenticated,logout } = useAuth0();
    return(
        // here hp refers to homepage
    <div className="farmer_hp_container">
     <div className="Hp_NavBar">
         <li>
            <Link to="/farmerHomePage"><ul id="ul"><a href="">Home</a></ul></Link>
            <Link to="/BidHistory"><ul id="ul"><a href="">MyBids</a></ul></Link>
            <ul id="ul"><a href="/Profie">Profile</a></ul>
            <Link to="/NotificationPage"><ul id="ul"><a href="" >Notifications</a></ul></Link>
            {isAuthenticated? (
                 <ul> <button className="farmer_Login_btn" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                 Log Out
               </button></ul>
            ):(
                <ul><button className="farmer_Login_btn" onClick={() => loginWithRedirect()}>Log In</button>;</ul>
            )}
         </li>
     </div>
       <div class="farmer_hp_Slogan"><h1>Where <p id="farmer">Farmer</p> Meet the Market:</h1>
            <h1>Bids Made Simple</h1>  </div>
     </div>
    );
}
export default FarmerHomePage; 