import React, { useState , useEffect } from "react";
import { useLoggedInUser } from "../hooks/useLoggedInUser";

export default function EmailAddress({ toggleEditMenu,
emailAddress
 }) {

    // Call the custom hook and destructure the values
    const { loggedInUser } = useLoggedInUser();
    const [ email, setEmail ] = useState(null);

    useEffect(() => {
        if (loggedInUser && loggedInUser.user_email) {
          setEmail(loggedInUser.user_email);
        }
      }, [loggedInUser]);

    return (
        <>
            <div className="info-section">
                <div>
                    <h3>Email Address</h3>
                    <p>
                        {/* Conditionally render the user's full name or a fallback */}
                        {emailAddress
                            ? `${emailAddress}`
                            : `${email}`}
                    </p>
                </div>
                <button onClick={toggleEditMenu}>Edit</button>
            </div>
        </>
    )
}