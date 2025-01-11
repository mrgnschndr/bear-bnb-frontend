import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function ListingCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTIyNDQwMTA4MDMyMzk3NjYwOQ%3D%3D/original/ab966ef2-5920-405d-b96f-f06a564fe073.jpeg?im_w=720&im_format=avif"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Winkelbach, Germany
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            89 kilometers away
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Jan 26 – 31
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            $176 night
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
