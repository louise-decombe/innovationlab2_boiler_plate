import React, { Component } from 'react'

export default class SignUp extends Component {
  render() {
    return (
      <form>
        <h3>Sign Up</h3>

        <div className="">
          <label>First name</label>
          <input
            type="text"
            className=""
            placeholder="First name"
          />
        </div>

        <div className="">
          <label>Last name</label>
          <input type="text" className="" placeholder="Last name" />
        </div>

        <div className="">
          <label>Email address</label>
          <input
            type="email"
            className=""
            placeholder="Enter email"
          />
        </div>

        <div className="">
          <label>Password</label>
          <input
            type="password"
            className=""
            placeholder="Enter password"
          />
        </div>

        <div className="">
          <button type="submit" className="">
            Sign Up
          </button>
        </div>
        <p className="">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    )
  }
}
