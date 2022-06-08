import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_URL } from '../../config'
import axios from 'axios';
import { useHistory } from "react-router-dom";

class Post extends React.Component {



  state = {
    singleposts: [],
    error: null,
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/posts/1`);
      this.setState({ singleposts: response.data });
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const { error, singlepost } = this.state;

    // Print errors if any
    if (error) {
      return <div>An error occured: {error.message}</div>;
    }

    return (

      <div className="App">
        <ul>
          {this.state.singleposts.map(singlepost => (
            <li key={singlepost.id}>{singlepost.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Post;
