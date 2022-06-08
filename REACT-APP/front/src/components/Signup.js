import React, { useState } from 'react'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import authApi from '../services/authApi'

const LoginForm = () => {
  const [credentials, setCredentials] = useState ({
    username: "",
    password: ""
  })

  const handleChange = ({currentTarget}) => {
    console.log(currentTarget)
    const {value, name} = currentTarget
    setCredentials(
     {
       ...credentials,
       [name]: value
     } 
    )
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
    await  authApi.authenticate(credentials)
    }catch(error){
      console.log(error)
    }
  }



  return (

    <form onSubmit={handleSubmit}>
      <div>
      <TextField
      id="username"
      label="Username"
      type="text"
      name="identifier"
      onChange={handleChange}
      />
      </div>
      <div>
      <TextField
      id="password"
      label="Password"
      type="text"
      name="password"
      onChange={handleChange}
      />
      </div>
      <div>
      <Button variant="contained" color="primary" type="submit">
        Login
      </Button>
      </div>
    </form>

  )




}

export default LoginForm;