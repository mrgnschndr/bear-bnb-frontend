import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './listingPage.css'
import StarIcon from '@mui/icons-material/Star';
import Stack from '@mui/material/Stack';

export default function Listing() {
    const { listingId } = useParams();
    const [listing, setListing] = useState(null); // State to store listing details
    const [error, setError] = useState(null); // State to store errors

    const fetchListing = async () => {
        try {
            const res = await axios.get(`http://localhost:5004/api/listing/${listingId}`);
            if (res.data.success) {
                console.log("Fetched listing data:", res.data.data);
                setListing(res.data.data); // Save data to state
            } else {
                console.warn("Listing not found or invalid response:", res.data.message);
                setError("Listing not found");
            }
        } catch (error) {
            console.error("Error fetching listing:", error);
            setError("Failed to fetch listing. Please try again later.");
        }
    };

    useEffect(() => {
        fetchListing();
    }, [listingId]);

    // Render the listing details or error message
    return (
        <div className="listing-container">
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {listing ? (
                <div>
                    <h1>{(listing.listing_title).charAt(0).toUpperCase() + (listing.listing_title).slice(1)}</h1>
                    <div className="img-gallery-container">
                    <img className="main-img" src={listing.main_image_url}/>
                        <div className="child-image-grid">
                            <img src={listing.list_image_url[1]}/>
                            <img  src={listing.list_image_url[2]}/>
                            <img  src={listing.list_image_url[3]}/>
                            <img  src={listing.list_image_url[4]}/>
                        </div>
                        {/* src={listing.list_image_url[1]} */}
                    </div>
                    <h2>{listing.guest_access} in {listing.listing_city}</h2>
                    <p>{listing.listing_max_guest} guests · {listing.listing_bedrooms} bedrooms · {listing.num_beds} beds · {listing.listing_baths} baths</p>
                    {(listing.full_rating > 4 && listing.number_reviews > 200) ? (
                    <div>Guest Favorite</div>
                    ) : (
                        <Stack alignItems="center" direction="row" gap={0.5}>
                            <StarIcon sx={{ fontSize: 25}}/>
                            <h3><strong>{listing.full_rating}</strong> · {listing.number_reviews} Reviews</h3>
                      </Stack>
                    )}
                    </div>
            ) : (
                !error && <p>Loading listing details...</p>
            )}
        </div>
    );
}
