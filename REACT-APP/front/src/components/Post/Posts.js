import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Loading from '../Loading';
import CardPost from '../CardPost';

const BASE_URL = "http://localhost:1337/api/posts";

export default function Posts() {
  const [listposts, setListPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://localhost:1337/api/posts',
      );

      setListPosts(result.data);
    };

    fetchData();
  }, []);

  return (
  
    <div className="App">
    <h1> Last posts</h1>
      <Grid container spacing={3}>
      {listposts.map(listpost => (

      <CardPost post={listpost} key={listpost.attributes.id} />       
        
    ))}
      </Grid >

    </div>
  
  );
} 