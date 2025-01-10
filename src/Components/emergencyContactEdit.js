import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import axios from 'axios';
import { useLoggedInUser } from '../hooks/useLoggedInUser';

export default function EmergencyContactEdit({ toggleEditMenu }) {
    return (
        <div className="info-section">
            <div className='left-aligned'> 
                <h3>Emergency Contact</h3>
                <p>A trusted contact we can alert in an urgent situation.</p>
                <Box className="text-fields vertical">
                    <TextField
                        label="Name"
                        id="outlined-required"
                        defaultValue=""
                        variant="outlined"
                        sx={{
                            margin: '5px',
                            width: '50ch'
                        }}
                    ></TextField>
                    <TextField
                        label="Relationship"
                        id="outlined-required"
                        defaultValue=""
                        variant="outlined"
                        sx={{
                            margin: '5px',
                            width: '50ch'
                        }}
                    ></TextField>
                    <TextField
                        label="Email"
                        id="outlined-required"
                        defaultValue=""
                        variant="outlined"
                        sx={{
                            margin: '5px',
                            width: '50ch'
                        }}
                    ></TextField>
                        <TextField
                        label="Phone number"
                        id="outlined-required"
                        defaultValue=""
                        variant="outlined"
                        sx={{
                            margin: '5px',
                            width: '50ch'
                        }}
                    ></TextField>
                </Box>
                <button className='save-btn'>Save</button>
            </div>
            <button onClick={toggleEditMenu}>Cancel</button>
        </div>

    )
}