import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';

createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-fzi57l0pj42gh47u.us.auth0.com"
    clientId="oAmCUrWtzdtp9vFl2vw9rqhAkaymj1tv"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>

  <BrowserRouter>
    <App />
  </BrowserRouter>,
  </Auth0Provider>
)
