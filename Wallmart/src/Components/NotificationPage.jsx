// import React, { useState } from 'react';
// import './NotificationPage.css';

// const NotificationPage = ({ onNotificationAccepted }) => {
//   // Dummy notifications data
//   const [notifications, setNotifications] = useState([
//     {
//       id: '001',
//       date: '2024-08-10',
//       status: 'Pending',
//       totalAmount: '$1000',
//       cropType: 'Wheat',
//       quantity: '1000 kg',
//       bidderName: 'John Doe',
//       harvestDate: '2024-09-15',
//       warehouseLocation: 'Central Warehouse',
//       notes: 'None',
//     },
//     {
//       id: '002',
//       date: '2024-08-11',
//       status: 'Pending',
//       totalAmount: '$1500',
//       cropType: 'Corn',
//       quantity: '1500 kg',
//       bidderName: 'Jane Smith',
//       harvestDate: '2024-09-20',
//       warehouseLocation: 'East Warehouse',
//       notes: 'Urgent delivery required',
//     },
//   ]);

//   const handleAccept = (id) => {
//     const acceptedNotification = notifications.find(notification => notification.id === id);
//     onNotificationAccepted(acceptedNotification);
    
//     // Optionally remove the notification from the list after acceptance
//     setNotifications(notifications.filter(notification => notification.id !== id));
//   };

//   return (
//     <div className="notification-container">
//       <h2>Notifications</h2>
//       <table className="notification-table">
//         <thead>
//           <tr>
//             <th>Date</th>
//             <th>Status</th>
//             <th>Total Amount</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {notifications.map(notification => (
//             <tr
//               key={notification.id}
//               className={notification.status === 'Accepted' ? 'status-accepted' : 'status-pending'}
//             >
//               <td>{notification.date}</td>
//               <td>{notification.status}</td>
//               <td>{notification.totalAmount}</td>
//               <td>
//                 <button
//                   className="action-button accept"
//                   onClick={() => handleAccept(notification.id)}
//                 >
//                   Accept
//                 </button>
//                 <button
//                   className="action-button reject"
//                   onClick={() => setNotifications(notifications.filter(n => n.id !== notification.id))}
//                 >
//                   Reject
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default NotificationPage;
import React, { useState } from 'react';
import './NotificationPage.css';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import wallmartlogo from '../assets/wallmartlogo.png'; 
const NotificationPage = ({ onNotificationAccepted }) => {
  const [notifications, setNotifications] = useState([
    {
      id: '0121',
      buyer: 'Ankit Rajput',
      crop: 'Wheat',
      totalAmount: '₹500',
      date: '10-08-2024',
      Contact:'9768453292',
      quantity:'1 Ton',
      Delivery_Date:'10-1-2025',
      status:'In Process'
    },
    {
      id: '0131',
      buyer: 'Harpreet Singh',
      crop: 'Corn',
      totalAmount: '₹300',
      date: '19-04-2024',
      Contact:'8765432182',
      quantity:'250 kg',
      Delivery_Date:'21-07-2024',
      status:'In Process'
    },
  ]);
  const { loginWithRedirect,isAuthenticated,logout } = useAuth0();

  const handleAccept = (notification) => {
    onNotificationAccepted(notification);
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notif) => notif.id !== notification.id)
    );
  };

  const handleReject = (notification) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notif) => notif.id !== notification.id)
    );
  };

  return (
    <>
      <nav className="Notifications_NavBar">
        <ul>
        <div className="n-logo">
              <img src={wallmartlogo} alt="walmmartlogo" height="50"/>
        </div>
          <Link to="/farmerHomePage"><li><a href="">Home</a></li></Link>
          <Link to="/BidHistory"><li><a href="">My Bids</a></li></Link>
          <li><a href="">Profile</a></li>
          <Link to="/NotificationPage"><li><a href="">Notifications</a></li></Link>
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
      <div className="notification-page">
        <h2 id="h22">Notifications</h2>
        <div className="notification-list">
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <div key={notification.id} className="notification-item">
                <div className="notification-header">
                  <h3>{notification.crop}</h3>
                  <span className="notification-date">{notification.date}</span>
                </div>
                <div className="notification-body">
                  <p><strong>Buyer:</strong> {notification.buyer}</p>
                  <p><strong>Amount:</strong> {notification.totalAmount}</p>
                  <p>{notification.details}</p>
                </div>
                <div className="notification-actions">
                  <button className='green-but' onClick={() => handleAccept(notification)}>Accept</button>
                  <button className='red-but'onClick={() => handleReject(notification)}>Reject</button>
                </div>
              </div>
            ))
          ) : (
            <p>No notifications available.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default NotificationPage;
