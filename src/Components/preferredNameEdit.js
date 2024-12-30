import React from 'react';
import { Box, TextField } from '@mui/material';


export default function PreferredNameEdit() {
    return (
        <div className="info-section-edit">
            <div className="preferred-edit">
                <div className="preferred-text">
                    <h3>Preferred name</h3>
                    <p>This is how your first name will appear to Host and guests. <a href="google.com">Learn more</a></p>
                </div>
                {/* Grabbed from text field mui */}
                <TextField
                    id="outlined-password-input"
                    fullWidth label="Preferred name (optional)"
                    input type="name"
                    />
                <button type="submit" className="save-btn">Save</button>
            </div>
            <button className="cancel-btn">Cancel</button>
        </div>
    )
}