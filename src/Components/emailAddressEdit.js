import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import axios from 'axios';
import { useLoggedInUser } from "../hooks/useLoggedInUser";


export default function EmailAddressEdit({ 
    toggleEditMenu, 
     }) {
    const { loggedInUser } = useLoggedInUser();
    const PutEmail = async () => {
        let url = "http://localhost:5001";
        try {
          let res = await axios.put(`${url}/api/email-update/${loggedInUser.user_id}`);
          return res.data;

        } catch(error) {
          console.log(error.message);
        }
    }
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
                <button onClick={PutEmail} className='save-btn'>Save and continue</button>
            </div>
            <button onClick={toggleEditMenu}>Cancel</button>
        </div>

    )
}