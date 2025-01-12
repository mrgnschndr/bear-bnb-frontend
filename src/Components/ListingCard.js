import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';



export default function ListingCard({
    key,
    title,
    address,
    city,
    state,
    price

}) {
  
  
    return (
    <Card sx={{ 
        maxWidth: '0.2vw',
        border: 'none',
        maxHeight: 'Calculate(maxWidth * 0.95)',
         }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTIyNDQwMTA4MDMyMzk3NjYwOQ%3D%3D/original/ab966ef2-5920-405d-b96f-f06a564fe073.jpeg?im_w=720&im_format=avif"
          alt="Available Bearbnb rental listing"
          sx={{
            borderRadius: '8px',
          }}
        />
        <CardContent>
          <Typography variant="h5" component="div" fontSize="0.65rem" fontWeight="bold">
            {title}
          </Typography>
          <Typography variant="body2" fontSize="0.65rem" fontWeight='500' sx={{ color: 'text.secondary' }}>
            89 kilometers away
          </Typography>
          <Typography gutterBottom variant="body2" fontSize="0.65rem" sx={{ color: 'text.secondary' }}>
            Jan 26 – 31
          </Typography>
          <Typography variant="body2" fontSize="0.65rem" sx={{ 
            color: 'black',
            fontWeight: 'bold',
             }}>
            ${price} per night
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
