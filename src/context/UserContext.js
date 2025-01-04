import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

// Create a context for user-related data
const UserContext = createContext();

// Define the UserProvider component to manage the user fetching logic
export function UserProvider({ children }) {
  // State variable to hold the list of users // Jess has this as null in her video
  const [users, setUsers] = useState([]);
  // State variable to track the loading state (for example, during data fetching)
  const [loading, setLoading] = useState(true);

  // Asynchronous function to fetch users using axios
  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5004/api/users");
      if (response.data.success) {
        console.log("All users from database:", response.data.data);
        setUsers(response.data.data); // Update the users state with fetched data
      } else {
        console.error(response.data.message); // Log the error message if fetching fails
      }
    } catch (error) {
      // Log any errors encountered during the request
      console.error("Error fetching users:", error);
    } finally {
      // Set loading to false when the request is done
      setLoading(false);
    }
  };

  // useEffect hook to call fetchUsers when the component mounts
  useEffect(() => {
    fetchUsers();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    // Provide the users and loading state to child components through context
    <UserContext.Provider value={{ users, loading }}>
      {children}
    </UserContext.Provider>
  );
}

// Custom hook to access user context in other components
export function useUser() {
  // Use the useContext hook to consume the UserContext
  const context = useContext(UserContext);

  // If the context is undefined (i.e., the hook is used outside of a UserProvider), throw an error
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }

  // Return the context, which contains users and loading
  return context;
}
