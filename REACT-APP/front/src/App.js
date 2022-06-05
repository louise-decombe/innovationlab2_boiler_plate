import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import SignUp from './components/Signup'
import About from './components/About/About'


function App() {

  const adminUser = {
   email: "admin@mail.com",
   password: "root"   
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");
  const Login = details => {
    console.log(details);
  }

  const Logout = () => {
    console.log("logout")
  }

  return (

    <Router>
      <div className="App">

        {(user.email != "")} ? (
          <div className='logged'>
            <h2> You are logged in {user.name} </h2>
            <button> logout </button>
          </div>
        ) : (

          <LoginForm Login={Login} error={error}/>
        )

        <nav className="">
          <div className="container">
            <Link className="" to={'/sign-in'}>
              App 
            </Link>
            <div className="" id="">
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

        <div className="">
          <div className="">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/about" element={<About />} />

            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
