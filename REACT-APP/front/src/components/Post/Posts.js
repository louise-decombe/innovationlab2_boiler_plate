import React from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';


class Posts extends React.Component {
  state = {
    posts: [],
    error: null,
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get('http://localhost:1337/api/posts');
      this.setState({ posts: response.data.data });
      console.log(response)
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const { error, post } = this.state;

    if (error) {
      return <div>An error occured: {error.message}</div>;
    }

    return (
      <div className="App">

<h1> Last posts</h1>
        <Grid container spacing={3}>
        {this.state.posts.map(post => (

<li key={post.title}>{post.attributes.title}</li>
))}
        </Grid >

      </div>
    );
  }
}

export default Posts;
