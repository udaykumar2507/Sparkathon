import React, { useState } from 'react';
import { Route,Routes} from 'react-router-dom';
import NotificationPage from './Components/NotificationPage.jsx';
import BidHistory from './Components/BidHistory.jsx';
import RoleSelection from './Components/RoleSelection.jsx';
import FarmerHomePage from './Components/FarmerHomePage.jsx';
import ReportPage from './Components/ReportPage.jsx';
import BuyerHome from './Components/BuyerHome.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [bidsHistory, setBidsHistory] = useState([]);

  const handleNotificationAccepted = (notification) => {
    setBidsHistory((prevBids) => [...prevBids, notification]);
  };

  return (
    <>
      <Routes>
        <Route exact path="/" element={<RoleSelection/>} />
        <Route path="/farmerHomePage" element={<FarmerHomePage/>} />
        <Route  path="/BidHistory" element={ <BidHistory bidsHistory={bidsHistory} />} />
        <Route  path="/NotificationPage" element={ <NotificationPage onNotificationAccepted={handleNotificationAccepted} />} />
        <Route  path="/BidHistory/NotificationPage" element={ <NotificationPage onNotificationAccepted={handleNotificationAccepted} />} />
        <Route path="/ReportPage" element={<ReportPage/>}/>
        <Route path="/BuyerHome" element={<BuyerHome/>}/>      
      </Routes> 
    </>
      
  );
};

export default App;
