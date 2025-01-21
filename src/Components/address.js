import React, { useState , useEffect } from "react";
import { useLoggedInUser } from "../hooks/useLoggedInUser";

export default function Address({ 
    toggleEditMenu,
    address
    }) {
    // Call the custom hook and destructure the values
    const { loggedInUser } = useLoggedInUser();
    const [ newAddress, setAddress ] = useState('');

    // Check if address fields are available and join them with commas
    const userAddress = loggedInUser
        ? [
            `${loggedInUser.user_address_one} ${loggedInUser.user_city}, ${loggedInUser.user_state} ${loggedInUser.user_country} ${loggedInUser.user_postal_code}`
            
        ].filter(Boolean).join(', ') // Filter out any empty values and join with commas
        : "Not Provided";

    useEffect(() => {
            if (loggedInUser && loggedInUser.user_address_one) {
            setAddress(`${loggedInUser.user_address_one} ${loggedInUser.user_city} , ${loggedInUser.user_state} ${loggedInUser.user_country} ${loggedInUser.user_postal_code}`)
            }
        }, [loggedInUser]);


    return (
        <div className="info-section">
            <div>
                <h3>Address</h3>
                <p>
                    {address
                    ? `${address}`
                    : `${newAddress}`}
                </p>
            </div>
            <button onClick={toggleEditMenu}>Edit</button>
        </div>
    );
}
