import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { API_URL } from '../config';
import { Link } from '@mui/material';
import { NavLink } from 'react-router-dom';

export default function CardPost({post}) {
    console.log(post)
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={post.attributes.image !== null ? API_URL + post.attributes.image.data[0].attributes.formats.small.url: "..."}
        alt={post.attributes.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {post.attributes.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.attributes.content.substring(0, 100)} ...
        </Typography>
      </CardContent>
      <CardActions>
          <NavLink to={`/posts/${post.id}`}>
        <Button size="small">Read More</Button>
        </NavLink>
      </CardActions>

    </Card>
  );
}
