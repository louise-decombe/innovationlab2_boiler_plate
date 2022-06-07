import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import SignUp from './components/Signup'
import About from './components/About/About'
import Posts from './components/Post/Posts'
import Container from '@mui/material/Container';
import Navbar from './components/Navbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';


import BottomNavigation from '@mui/material/BottomNavigation';


function App() {

  return (
    <Container>

  <Navbar />
    <Router>
      <div className="App">
        <nav className="">
          <div className="">
           
            <div className="navigation" id="">
              <ul className="">
                <li className="">
                  <Link className="" to={'/sign-in'}>
                    Login
                  </Link>
                </li>
                <li className="">
                  <Link className="" to={'/sign-up'}>
                    Sign up
                  </Link>
                </li>
                <li className="">
                  <Link className="" to={'/about'}>
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Link className="" to={'/sign-in'}>
              App 
            </Link>




        <Posts />

        <div className="">
          <div className="">
            <Routes>
              <Route path="/sign-in" element={<LoginForm />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/about" element={<About />} />

            </Routes>
          </div>
        </div>
      </div>
    </Router>
    </Container>

  )
}

export default App
