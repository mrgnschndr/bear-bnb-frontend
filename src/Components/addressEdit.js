import React, { useState } from 'react';
import { Box, TextField, InputLabel, FormControl, Select, MenuItem } from '@mui/material';
import axios from 'axios';
import { useLoggedInUser } from "../hooks/useLoggedInUser";

export default function AddressEdit({ 
    toggleEditMenu,
    onSave,
    initialAddress
}) {

    // Destructure assignment from custom hook
    const { loggedInUser } = useLoggedInUser();

    // Initialize state and modifier function for full user address
    const [address, setAddress] = useState("");

    //Initialize state for error message
    const [error, setError] = useState("");

    //Initialize loading state
    const [isLoading, setIsLoading] = useState("")

    // Handle input changes for each field
    const handleInputChange = (key, value) => {
        setEmergencyContact((prev) => ({
            ...prev,
            [key]: value,
        }));
    };


    const [country, setCountry] = React.useState("US");
    const handleChange = (event) => {
        setCountry(event.target.value);
    }
    return (
        <div className="info-section-edit">
            <div className='left-aligned'> 
                <h3>Address</h3>
                <p>Use a permanent address where you can receive mail.</p>
                <Box className="country-box">
                    <FormControl className="form-control">
                        <InputLabel id="country-label">Country/region</InputLabel>
                        <Select className="select-form"
                            labelId="country-select-label"
                            id="country-select"
                            value={country}
                            label="Country/region"
                            onChange={handleChange}
                        >
                                <MenuItem value={"AR"}>Argentina</MenuItem>
                                <MenuItem value={"AU"}>Australia</MenuItem>
                                <MenuItem value={"AT"}>Austria</MenuItem>
                                <MenuItem value={"BR"}>Brazil</MenuItem>
                                <MenuItem value={"CA"}>Canada</MenuItem>
                                <MenuItem value={"CH"}>Switzerland</MenuItem>
                                <MenuItem value={"CN"}>China</MenuItem>
                                <MenuItem value={"EG"}>Egypt</MenuItem>
                                <MenuItem value={"FR"}>France</MenuItem>
                                <MenuItem value={"DE"}>Germany</MenuItem>
                                <MenuItem value={"GR"}>Greece</MenuItem>
                                <MenuItem value={"IN"}>India</MenuItem>
                                <MenuItem value={"ID"}>Indonesia</MenuItem>
                                <MenuItem value={"IE"}>Ireland</MenuItem>
                                <MenuItem value={"IT"}>Italy</MenuItem>
                                <MenuItem value={"JP"}>Japan</MenuItem>
                                <MenuItem value={"MY"}>Malaysia</MenuItem>
                                <MenuItem value={"MX"}>Mexico</MenuItem>
                                <MenuItem value={"NL"}>Netherlands</MenuItem>
                                <MenuItem value={"NZ"}>New Zealand</MenuItem>
                                <MenuItem value={"PT"}>Portugal</MenuItem>
                                <MenuItem value={"SG"}>Singapore</MenuItem>
                                <MenuItem value={"ZA"}>South Africa</MenuItem>
                                <MenuItem value={"KR"}>South Korea</MenuItem>
                                <MenuItem value={"ES"}>Spain</MenuItem>
                                <MenuItem value={"SE"}>Sweden</MenuItem>
                                <MenuItem value={"TH"}>Thailand</MenuItem>
                                <MenuItem value={"TR"}>Turkey</MenuItem>
                                <MenuItem value={"AE"}>United Arab Emirates</MenuItem>
                                <MenuItem value={"GB"}>United Kingdom</MenuItem>
                                <MenuItem value={"US"}>United States</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <div className="address-edit">
                <Box className="address-fields">
                    <TextField
                        id="outlined"
                        label="Street address"
                        defaultValue=""
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    ></TextField>
                    <TextField
                        id="outlined"
                        label="Apt, suite. (optional)"
                        defaultValue=""
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    ></TextField>
                    <div className="city-state">
                    <TextField
                        id="outlined"
                        label="City"
                        defaultValue=""
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    ></TextField>
                    <TextField
                        id="outlined"
                        label="State / Province / County / Region"
                        defaultValue=""
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    ></TextField>
                    </div>
                    <TextField
                        id="outlined"
                        label="ZIP code"
                        defaultValue=""
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    ></TextField>
                </Box>
                </div>
                <button className='save-btn'>Save and continue</button>
            </div>
            <button className="cancel-btn" onClick={toggleEditMenu}>Cancel</button>
        </div>

    )
}