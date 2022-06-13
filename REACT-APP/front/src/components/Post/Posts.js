import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import CardPost from '../CardPost';

const BASE_URL = "http://localhost:1337/api/posts/1";

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(BASE_URL).then((response) => {
      setPost(response.data.data.attributes);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <h1>{post.title}</h1>
    </div>
  );
}
