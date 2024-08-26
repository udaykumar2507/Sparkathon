import React, { useState } from 'react';
import { Navbar, Nav, Card, Button, Modal, Container, Alert } from 'react-bootstrap';
import './BuyerHome.css'; // Import custom CSS
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';

const FarmerDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedFarmer, setSelectedFarmer] = useState(null);
  const [notificationMessage, setNotificationMessage] = useState('');
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  const farmers = [
    {
      id: 1,
      name: 'Farmer A',
      landSize: '10 acres',
      soilType: 'Loamy',
      crop: 'Wheat',
      currentcrop: 'Millet'
    },
    {
      id: 2,
      name: 'Farmer B',
      landSize: '15 acres',
      soilType: 'Clayey',
      crop: 'Rice',
      currentcrop: 'Maize'
    },
    // Add more farmers as needed
  ];

  const handleShowModal = (farmer) => {
    setSelectedFarmer(farmer);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedFarmer(null);
    setNotificationMessage('');
  };

  const sendNotification = (farmerName) => {
    if (!isAuthenticated) {
      setNotificationMessage('Please log in to send notifications.');
    } else {
      alert(`Notification sent to ${farmerName}`);
    }
  };

  return (
    <div>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src="src/assets/wallmartlogo.png" height="50" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/BuyerHome" className="nav-link">Home</Link>
              <Link to="/ReportPage" className="nav-link">Reports</Link>
              <Link to="#contact" className="nav-link">Contact</Link>
              {isAuthenticated ? (
                <button className="farmer_Login_btn__" onClick={() => logout({ returnTo: window.location.origin })}>
                  Log Out
                </button>
              ) : (
                <Button className="farmer_Login_btn__" onClick={() => loginWithRedirect()}>
                  Log In
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-4">
        {isAuthenticated ? (
          <>
            {farmers.map((farmer) => (
              <Card key={farmer.id} className="mb-3">
                <Card.Header>
                  {farmer.name}
                </Card.Header>
                <Card.Body className="d-flex gap-3">
                  <Button variant="primary" onClick={() => handleShowModal(farmer)}>
                    View Details
                  </Button>
                  <Button variant="secondary" id="send-btn" onClick={() => sendNotification(farmer.name)}>
                    Send Notification
                  </Button>
                </Card.Body>
              </Card>
            ))}

            <Modal show={showModal} onHide={handleCloseModal}>
              <Modal.Header closeButton>
                <Modal.Title>{selectedFarmer?.name}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p><strong>Land Size:</strong> {selectedFarmer?.landSize}</p>
                <p><strong>Soil Type:</strong> {selectedFarmer?.soilType}</p>
                <p><strong>Most Commonly Farmed Crop:</strong> {selectedFarmer?.crop}</p>
                <p><strong>Current Crop:</strong> {selectedFarmer?.currentcrop}</p>
                <Button variant="secondary">Add Extra Details</Button>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        ) : (
          <div className="centered-container mt-4">
            <p>Please log in to view the farmer details</p>
            <Button variant="primary" onClick={() => loginWithRedirect()}>
              Log In
            </Button>
            {notificationMessage && <Alert variant="warning" className="mt-3">{notificationMessage}</Alert>}
          </div>
        )}
      </Container>
    </div>
  );
};

export default FarmerDetails;
