import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { ListingClickedContext } from '../Components/ListingCard';


export default function Listing() {

    const listing_id = useContext(ListingClickedContext);
    console.log('listing id:', listing_id);

    const fetchListing = async () => {

        try{
            const res = await axios.get(`http://localhost:5004/api/listing/${listing_id}`);
            if (res.data.success) {
                console.log("All data from this listing:", res);
            }
        } catch(error) {
            console.error("Error fetching listings:", error);
        }
        
    }


    useEffect(() => {
        fetchListing();
      }, []);

}
