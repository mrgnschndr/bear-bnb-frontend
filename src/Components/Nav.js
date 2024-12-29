// Icon links - https://mui.com/material-ui/material-icons/?query=menu
// Started with Component from https://mui.com/material-ui/react-menu/#system-BasicMenu.js
// We may need to update the state on this to use usecontext depending on how user logins are handled // needed - Andy

import React from 'react';
import Logo from './Logo';  // Import the Logo component
import UserNav from './UserNav';  // Import the UserNav component
import './Nav.css';  // Import the CSS file for styles

// Define the Nav component
export default function Nav() {
  return (
    <div className="nav-container">
      {/* Render the Logo component */}
      <Logo />
      {/* Render the UserNav component */}
      <UserNav />
    </div>
  );
}
