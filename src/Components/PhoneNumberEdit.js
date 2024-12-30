import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export default function LegalNameEdit({ toggleEditMenu }) {
    return (
        <div className="info-section">
            <div className='left-aligned'> 
                <h3>Phone Number</h3>
                <p>For notifications, reminders, and help logging in</p>
                <Box className="text-fields">
                    <TextField required
                        id="outlined-required"
                        label="First name on ID"
                        defaultValue=""
                        variant="outlined"
                        sx={{
                            margin: '5px'
                        }}
                    ></TextField>
                    <TextField required
                        id="outlined-required"
                        label="Last name on ID"
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