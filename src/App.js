import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';  // Import BrowserRouter
import Nav from './Components/Nav.js';  // Your navigation component
import PersonalInfo from './pages/personal-info.js'
import FooterAccount from './Components/FooterAccount';

function App() {
  return (
    <Router> 
      <div className="App">
        <Nav />
        <PersonalInfo />
        <FooterAccount />
      </div>
    </Router>
  );
}

export default App;
