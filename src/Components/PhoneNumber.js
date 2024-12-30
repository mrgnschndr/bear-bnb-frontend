import React from "react";

/**
 * Display component for the user's phone number
 * Shows either the saved phone number or "Not Provided" if none exists
 *
 * string ->  phoneNumber - The user's saved phone number
 * function -> toggleEditMenu - Function to switch to edit mode
 */
export default function PhoneNumber({ phoneNumber, toggleEditMenu }) {
  return (
    <div className="info-section">
      <div>
        <h3>Phone Number</h3>
        <p>{phoneNumber || "Not Provided"}</p>
      </div>
      <button onClick={toggleEditMenu}>Edit</button>
    </div>
  );
}
