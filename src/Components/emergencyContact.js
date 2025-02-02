import React, { useState , useEffect } from "react";
import { useLoggedInUser } from "../hooks/useLoggedInUser";

export default function EmergencyContact( {         toggleEditMenu,
    emergencyContact
 } ) {

  // Call the custom hook and destructure the values
  const { loggedInUser } = useLoggedInUser();
  const [ newEmergency, setEmergency ] = useState('');

  useEffect(() => {
              if (loggedInUser && loggedInUser.user_econtact_name) {
              setEmergency(`${loggedInUser.user_econtact_name} ${loggedInUser.user_econtact_relationship} , ${loggedInUser.user_econtact_email} ${loggedInUser.user_econtact_phone}`)
              }
          }, [loggedInUser]);

    return (
        <>
                <div className="info-section">
                <div>
                    <h3>Emergency Contact</h3>
                    {emergencyContact 
                    ?
                        <ul className="econtact-list">
                            <li>Name: {loggedInUser.user_econtact_name}</li>
                            <li>Relationship: {loggedInUser.user_econtact_relationship}</li>
                            <li>Email: {loggedInUser.user_econtact_email}</li>
                            <li>Phone: {loggedInUser.user_econtact_phone}</li>
                        </ul>
                    : newEmergency }
                </div>
                <button onClick={toggleEditMenu}>Edit</button>
            </div>
        </>
    )
}