import React, { useState , useEffect } from "react";
import { useLoggedInUser } from "../hooks/useLoggedInUser";

export default function LegalName({ 
    toggleEditMenu,
    firstName,
    lastName
 }) {

  // Call the custom hook and destructure the values
  const { loggedInUser } = useLoggedInUser();
  const [ legalName, setLegalName ] = useState('');

  useEffect(() => {
      if (loggedInUser && loggedInUser.user_first_name) {
        setLegalName(`${loggedInUser.user_first_name} ${loggedInUser.user_last_name}`);
      }
    }, [loggedInUser]);

    return (
        <>
            <div className="info-section">
                <div>
                    <h3>Legal Name</h3>
                    <p>
                        {/* Conditionally render the user's full name or a fallback */}
                        {firstName
                            ? `${firstName} ${lastName}`
                            : `${legalName}`}
                    </p>
                </div>
                <button onClick={toggleEditMenu}>Edit</button>
            </div>
        </>
  );
}
