import React from "react";
import { Button, ButtonGroup, Box, TextField, Autocomplete, Typography } from '@mui/material';
import GoogleMaps from "./searchBar-google";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
    return(
        <div className="search-bar">
            <ButtonGroup>
            <GoogleMaps />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                    <DatePicker label="Check in" />
                </DemoContainer>
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                    <DatePicker label="Check out" />
                </DemoContainer>
            </LocalizationProvider>
            <Button variant="outlined">Who</Button>
            <Button variant="contained" endIcon={<SearchIcon />}>
                Search
            </Button>
            </ButtonGroup>
        </div>
    );
}
