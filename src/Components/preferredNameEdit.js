import React from 'react';
import { Box, TextField } from '@mui/material';


export default function PreferredNameEdit() {
    return (
        <div className="info-section">
            <div>
            <h3>Preferred name</h3>
            <p>This is how your first name will appear to Host and guests. <a href="google.com">Learn more</a></p>
            </div>
            <button>Cancel</button>
            {/* Grabbed from text field mui */}
            <form>
            <TextField
          id="outlined-password-input"
          fullWidth label="Preferred name (optional)"
          input type="name"
        />
            <button type="submit">Save</button>
            </form>
        </div>
    )
}