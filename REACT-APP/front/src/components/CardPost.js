import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { API_URL } from '../config/config';
import { NavLink } from 'react-router-dom';

export default function CardPost({listpost}) {
    console.log(listpost)
  return (
      
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={listpost.attributes.image !== null ? API_URL + listpost.attributes.image.data[0].attributes.formats.small.url: "..."}
        alt={listpost.attributes.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {listpost.attributes.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {listpost.attributes.content.substring(0, 100)} ...
        </Typography>
      </CardContent>
      <CardActions>
          <NavLink to={`/posts/${listpost.id}`}>
        <Button size="small">Read More</Button>
        </NavLink>
      </CardActions>
    </Card>
   
  );
}
