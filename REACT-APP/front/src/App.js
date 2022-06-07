import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import SignUp from './components/Signup'
import About from './components/About/About'
import Posts from './components/Post/Posts'
import Post from './components/Post/Post'
import Container from '@mui/material/Container';
import Navbar from './components/Navbar';
import Contact from './components/Contact/Contact';

import { createTheme, ThemeProvider } from '@mui/material/styles';


import BottomNavigation from '@mui/material/BottomNavigation';


function App() {

  return (
    <Container>

  <Navbar />
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
    </Container>

  )
}

export default App
