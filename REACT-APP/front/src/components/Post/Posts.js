import React from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import CardPost from '../CardPost';
import { Button } from '@mui/material';

class Posts extends React.Component {
  state = {
    posts: [],
    error: null,
    fileName: "",
    path: null
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get('http://localhost:1337/api/posts?populate=*');
      this.setState({ posts: response.data.data });
      console.log(response)
    } catch (error) {
      this.setState({ error });
    }
  };

  postPicture = () => {

    let data = new FormData()
    data.append("files.avatar", this.state.path)
    data.append("username", "test create")
    data.append("email", "jean-seb2b@live.fr")
    data.append("password", "123456")

    // axios.post("http://localhost:1337/api/upload", files).then(res => {
    //   console.log("RES ====", res)
    // }).catch(err => {
    //   console.log("ERR ====", err)
    // })

    axios.post("http://localhost:1337/api/users", data).then(res => {
      console.log("RES ====", res)
    }).catch(err => {
      console.log("ERR ====", err)
    })
  }

  render() {

    return (

      <div className="App">

        <h1> Last posts</h1>
        {this.state.error &&
          <div style={{ marginBottom: 50}}>An error occured: {this.state.error.message}</div>
        }
        <Grid container spacing={3}>
          {this.state.posts.map(post => (

            <CardPost post={post} key={post.attributes.id} />

          ))}
        </Grid >
        <input type="file" className="opacity-0" onChange={(e) => {
          e.target.files ? this.setState({ path: e.target.files[0], fileName: e.target.files[0].name }) : console.log("File Error", e)
        }} />
        <Button variant="contained" color="primary" onClick={this.postPicture}>
          Login
        </Button>

      </div>

    );
  }
}

export default Posts;
