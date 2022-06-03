import React, { Component } from 'react'

export default class Login extends Component {


  render() {
    return (
      <form>
        <h3>Log in</h3>
            {/* ERROR  */}
        <div className="">
          <label>Email address</label>
          <input
            type="email"
            className=""
            placeholder="Enter email"
            id="email"
          />
        </div>

        <div className="">
          <label>Password</label>
          <input
            type="password"
            className=""
            placeholder="Enter password"
            id="password"
          />
        </div>

        <div className="mb-3">
          <div className="">
            <input
              type="checkbox"
              className=""
              id="rememberme"
            />
            <label className="custom-control-label" htmlFor="rememberbe">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" className="">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    )
  }
}
