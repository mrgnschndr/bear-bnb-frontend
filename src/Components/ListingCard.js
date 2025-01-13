import React , { useState , createContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import '../pages/home.css';
import { useNavigate } from "react-router-dom";

export const ListingClickedContext = createContext([]);

export default function ListingCard({
  title,
  listingId,
  address,
  city,
  state,
  price,
  mainImageURL
}) {
  
    const [listing_id, setListingId] = useState(listingId);
    const roundPrice = (price.split("."))[0];
    
    let navigate = useNavigate(); 
    const routeChange = async () => { 
      let path = `/listing/${listingId}`; 
      navigate(path);
    }
  
    return (
    <>
    <ListingClickedContext.Provider value={listing_id}>
      <Card className="listing-card" sx={{ 
        maxWidth: '0.2vw',
        border: 'none',
        maxHeight: 'Calculate(maxWidth * 0.95)',
         }}>
        <CardActionArea onClick={routeChange}>
          <CardMedia
            component="img"
            height="140"
            image={mainImageURL}
            alt="Available Bearbnb rental listing"
            sx={{
              borderRadius: '8px',
            }}
          />
          <CardContent>
            <Typography variant="h5" component="div" fontSize="0.65rem" fontWeight="bold">
              {city}, {state}
            </Typography>
            <Typography variant="body2" fontSize="0.65rem" fontWeight='500' sx={{ color: 'text.secondary' }}>
              {Math.floor(Math.random() * 101)} miles away
            </Typography>
            <Typography gutterBottom variant="body2" fontSize="0.65rem" sx={{ color: 'text.secondary' }}>
              Jan 26 – 31
            </Typography>
            <Typography variant="body2" fontSize="0.65rem" sx={{ 
              color: 'black',
              fontWeight: 'bold',
              }}>
              {roundPrice} per night
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </ListingClickedContext.Provider>
    </>
  );
}
