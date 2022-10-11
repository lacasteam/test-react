import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="350"
          image="https://as1.ftcdn.net/v2/jpg/01/87/10/40/1000_F_187104027_8i2JbFDBB5jB7R65Ce464yRs4gfNbR3Z.jpg"
          alt="default profile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            USER NAME
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
