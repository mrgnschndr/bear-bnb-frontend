import React, { useState } from 'react';
import './home.css';
import SearchBar from '../Components/searchBar';
import ListingCard from '../Components/ListingCard';


export default function Home() {
    return(
        <>
            <SearchBar />
            <ListingCard />
        </>
    );
}

