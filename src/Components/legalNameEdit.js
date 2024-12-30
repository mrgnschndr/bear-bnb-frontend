import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export default function LegalNameEdit() {
    return (
        <div className="info-section">
            <div className='left-aligned'> 
                <h3>Legal Name</h3>
                <p>We’ll need to verify your new legal name before you can book your next trip.</p>
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
            <button>Cancel</button>
        </div>

    )
}