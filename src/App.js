import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';  // Import BrowserRouter
import Nav from './Components/Nav.js';  // Your navigation component
import PersonalInfo from './Components/personal-info.js'

function App() {
  return (
    <Router> 
      <div className="App">
        <Nav />
        <PersonalInfo />
      </div>
    </Router>
  );
}

export default App;
