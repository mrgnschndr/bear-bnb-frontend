import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';  // Import BrowserRouter
import PersonalInfo from './pages/personal-info.js'

function App() {
  return (
    <Router> 
      <div className="App">
        <PersonalInfo />
      </div>
    </Router>
  );
}

export default App;
