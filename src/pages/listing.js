import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './listingPage.css'

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
                    <h1>{listing.listing_title}</h1>
                    <h2>{listing.guest_access} in {listing.listing_city}</h2>
                    <p><strong>Address:</strong> {listing.listing_address}</p>
                    <p><strong>City:</strong> {listing.listing_city}, {listing.listing_state}</p>
                    <p><strong>Price per Night:</strong> {listing.price_per_night}</p>
                    <p><strong>Description:</strong> {listing.space_description}</p>
                    <p><strong>Rating:</strong> {listing.full_rating}/5</p>
                </div>
            ) : (
                !error && <p>Loading listing details...</p>
            )}
        </div>
    );
}
