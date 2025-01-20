import React, { useState , useEffect } from "react";
import { useLoggedInUser } from "../hooks/useLoggedInUser";

/**
 * Display component for the user's phone number
 * Shows either the saved phone number or "Not Provided" if none exists
 *
 * string ->  phoneNumber - The user's saved phone number
 * function -> toggleEditMenu - Function to switch to edit mode
 */
export default function PhoneNumber({ phoneNumber, toggleEditMenu }) {

  // Call the custom hook and destructure the values
  const { loggedInUser } = useLoggedInUser();
  const [phoneNum, setPhoneNum ] = useState(null);


  useEffect(() => {
    if (loggedInUser && loggedInUser.user_phone) {
      setPhoneNum(loggedInUser.user_phone);
    }
  }, [loggedInUser]);

  return (
    <div className="info-section">
      <div>
        <h3>Phone Number</h3>
        <p>
          {/* Conditionally render the user's full name or a fallback */}
          {phoneNumber 
          ? `${phoneNumber}`
          : `${phoneNum}`}
        </p>
      </div>
      <button onClick={toggleEditMenu}>Edit</button>
    </div>
  );
}
