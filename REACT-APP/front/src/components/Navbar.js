import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import LoginForm from './LoginForm';
import SignUp from './Signup';
import About from './About/About';
import Posts from './Post/Posts';
import Post from './Post/Post';
import Contact from './Contact/Contact';


export default function ButtonAppBar() {
  return (
<Box sx={{ flexGrow: 1 }}>
<Router>
    <div className="App">

      <div className="">
        <div className="">
          <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path="/sign-up" element={<SignUp />} /> 
            <Route path="/sign-in" element={<LoginForm />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </div>
  </Router>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Sample App
          </Typography>
         
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>




  );
}
