import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

// Create a context for listing-related data
const listingContext = createContext();

// Define the UserProvider component to manage the user fetching and login simulation logic
export function ListingProvider({ children }) {
  // State variable to hold the list of listings // Jess has this as null in her video
  const [listings, setListings] = useState([]);
  // State variable to track the loading state (for example, during data fetching)
  const [loading, setLoading] = useState(true);


  // Asynchronous function to fetch listings using axios
  const fetchListings = async () => {
    try {
      const response = await axios.get("http://localhost:5004/api/users");
      if (response.data.success) {
        console.log("All listings from database:", response.data.data);
        setListings(response.data.data); // Update the listings state with fetched data
        // if (response.data.data.length > 0) {
        //   setLoggedInUser(response.data.data[0]);
        // }
      } else {
        console.error(response.data.message); // Log the error message if fetching fails
      }
    } catch (error) {
      // Log any errors encountered during the request
      console.error("Error fetching listings:", error);
    } finally {
      // Set loading to false when the request is done
      setLoading(false);
    }
  };

  // useEffect hook to call fetchListings when the component mounts
  useEffect(() => {
    fetchListings();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    // Provide listings and loading state to child components
    <ListingContext.Provider
      value={{
        listings,
        loading
      }}
    >
      {children}
    </ListingContext.Provider>
  );
}

// Custom hook to access listing context in other components
export function useListing() {
  const context = useContext(ListingContext);

  if (context === undefined) {
    throw new Error("useListing must be used within a ListingProvider");
  }

  return context;
}
