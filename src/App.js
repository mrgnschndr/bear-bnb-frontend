import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';  // Import BrowserRouter
import Nav from './Components/Nav.js';  // Your navigation component

function App() {
  return (
    <Router> 
      <div className="App">
        <Nav />
        <p>Proof Of Life</p>
      </div>
    </Router>
  );
}

export default App;
