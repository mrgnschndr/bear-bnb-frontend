import React, { useState , useEffect } from "react";
import { useLoggedInUser } from "../hooks/useLoggedInUser";

export default function EmergencyContact( {         
toggleEditMenu,
emergencyContact
 } ) {

  // Call the custom hook and destructure the values
  const { loggedInUser } = useLoggedInUser();
  const [ newEmergency, setEmergency ] = useState('');

//   this.setState(prevState => ({
//     jasper: {                   // object that we want to update
//         ...prevState.jasper,    // keep all other key-value pairs
//         name: 'something'       // update the value of specific key
//     }
// }))

  useEffect(() => {
              if (loggedInUser && loggedInUser.user_econtact_name) {
              setEmergency(prevState => ({
                emergencyContact: {
                    ...prevState.emergencyContact,
                    name: `${emergencyContact.name}`
                },
                emergencyContact: {
                    ...prevState.emergencyContact,
                    relationship: `${emergencyContact.relationship}`
                },
                emergencyContact: {
                    ...prevState.emergencyContact,
                    email: `${emergencyContact.email}`
                },
                emergencyContact: {
                    ...prevState.emergencyContact,
                    phone: `${emergencyContact.phone}`
                }
            }))
          }}, [loggedInUser]);

    return (
        <>
                <div className="info-section">
                <div>
                    <h3>Emergency Contact</h3>
                    {loggedInUser && 
                        <ul className="econtact-list">
                            <li>Name: {loggedInUser.user_econtact_name}</li>
                            <li>Relationship: {loggedInUser.user_econtact_relationship}</li>
                            <li>Email: {loggedInUser.user_econtact_email}</li>
                            <li>Phone: {loggedInUser.user_econtact_phone}</li>
                        </ul>}
                    {!loggedInUser &&
                        <p>Not provided</p>
                    }
                </div>
                <button onClick={toggleEditMenu}>Edit</button>
            </div>
        </>
    )
}