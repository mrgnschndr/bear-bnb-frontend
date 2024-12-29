// Icon links - https://mui.com/material-ui/material-icons/?query=menu
// Started with Component from https://mui.com/material-ui/react-menu/#system-BasicMenu.js
// We may need to update the state on this to use usecontext depending on how user logins are handled // needed - Andy

// Import necessary dependencies from React and Material-UI
import * as React from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';

// Import associated CSS styles
import './userNav.css';

// Define the UserNav component
export default function UserNav() {

  // State management for the menu
  // anchorEl keeps track of which element the menu should anchor to
  const [anchorEl, setAnchorEl] = React.useState(null);
  // Derive whether menu is open based on anchorEl's value
  const open = Boolean(anchorEl);

  // Event handler for opening the menu
  // Sets the current target (the button) as the anchor element
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Event handler for closing the menu
  // Removes the anchor element reference
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    // Main navigation container
    <div className="nav-container">
      {/* Logo section */}
      <div className="logo">Bearbnb</div>

      {/* User menu button styled as a pill */}
      <Button
        className="pill-button"
        id="basic-button"
        // ARIA attributes for accessibility
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {/* Container for the button icons */}
        <div className="button-content">
          <MenuIcon sx={{ fontSize: 16 }} /> {/* Hamburger menu icon */}
          <AccountCircle sx={{ fontSize: 25 }} /> {/* User avatar icon */}
        </div>
      </Button>

      {/* Dropdown menu component */}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl} // Element to attach menu to
        open={open} // Controls menu visibility
        onClose={handleClose} // Handler for closing menu
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        // Configure menu position relative to button
        anchorOrigin={{
          vertical: 'bottom', // Appear below the button
          horizontal: 'right', // Align to right edge
        }}
        // Configure menu alignment
        transformOrigin={{
          vertical: 'top', // Align top of menu with bottom of button
          horizontal: 'right', // Align right edges
        }}
        // Styling for the menu container
        sx={{
          '& .MuiPaper-root': {
            marginTop: '8px', // Space between button and menu
            borderRadius: '12px', // Rounded corners
            boxShadow: '0 2px 16px rgba(0,0,0,0.12)', // Subtle shadow
            minWidth: '200px', // Minimum width of menu
          }
        }}
      >
        {/* Menu items - each closes menu when clicked */}
        <MenuItem onClick={handleClose}>Login</MenuItem>
        <MenuItem onClick={handleClose}>Sign up</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
      </Menu>
    </div>
  );
}