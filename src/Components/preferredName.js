import React, { useState, useEffect } from "react";
import { useLoggedInUser } from "../hooks/useLoggedInUser";

export default function PreferredName({ toggleEditMenu,
nickName
 }) {
  // Call the custom hook and destructure the values
  const { loggedInUser } = useLoggedInUser();
  const [ prefName, setPrefName ] = useState(null);

  useEffect(() => {
    if (loggedInUser && loggedInUser.preferredName) {
      setPrefName(loggedInUser.preferredName);
    }
  }, [loggedInUser]);

  return (
    <div className="info-section">
      <div>
        <h3>Preferred name</h3>
        <p>
          {/* Conditionally render the user's full name or a fallback */}
          {nickName
            // TODO: We need to think about adding nickname to the DB
            ? `${nickName}`
            : ''}
        </p>
      </div>
      <button onClick={toggleEditMenu}>Edit</button>
    </div>
  );
}
