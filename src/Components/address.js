import React from 'react';
import { useLoggedInUser } from "../hooks/useLoggedInUser";

export default function Address({ toggleEditMenu }) {
    // Call the custom hook and destructure the values
    const { loggedInUser } = useLoggedInUser();

    // Check if address fields are available and join them with commas
    const userAddress = loggedInUser
        ? [
            //TODO: Address street here
            loggedInUser.user_city,
            loggedInUser.user_state,
            //TODO: Postal code here
            loggedInUser.user_country,
        ].filter(Boolean).join(', ') // Filter out any empty values and join with commas
        : "Not Provided";

    return (
        <div className="info-section">
            <div>
                <h3>Address</h3>
                <p>{userAddress}</p>
            </div>
            <button onClick={toggleEditMenu}>Edit</button>
        </div>
    );
}
