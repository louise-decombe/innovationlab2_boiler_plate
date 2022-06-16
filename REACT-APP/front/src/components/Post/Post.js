import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BASE_URL = "http://localhost:1337/api/posts/1";

export default function Post() {
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

      <p>{post.content}</p>
    </div>

  );
}