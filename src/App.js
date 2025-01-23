import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';  // Import BrowserRouter
import { Routes, Route } from 'react-router-dom';
import PersonalInfo from './pages/personal-info.js'
import Home from './pages/home';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import Listing from './pages/listing';
import { Auth0Provider } from '@auth0/auth0-react';

function App() {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const origin = window.location.origin;

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: origin,
        scope: "openid profile email"
      }}
    >
      <Router> 
        <Nav />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/personal-info" element={<PersonalInfo />} />
          <Route path="/listing/:listingId" element={<Listing />} />
        </Routes>
        <Footer />
      </Router>
    </Auth0Provider>
  );
}

export default App;
