import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export default function EmailAddressEdit({ toggleEditMenu }) {
    return (
        <div className="info-section">
            <div className='left-aligned'> 
                <h3>Email Address</h3>
                <p>Use an address you’ll always have access to.</p>
                <Box className="text-fields">
                    <TextField required
                        id="outlined-required"
                        label="email address"
                        defaultValue=""
                        variant="outlined"
                        sx={{
                            margin: '5px'
                        }}
                    ></TextField>
                </Box>
                <button className='save-btn'>Save and continue</button>
            </div>
            <button onClick={toggleEditMenu}>Cancel</button>
        </div>

    )
}