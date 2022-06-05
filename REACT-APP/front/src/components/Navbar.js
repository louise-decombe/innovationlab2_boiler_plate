import React, { Component } from 'react';


export default function Navbar() {
    return (
      <nav className="navigation">
        <a href="/" className="brand-name">
          App
        </a>
 
        <div
          className="navigation-menu">
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>           
          </ul>
        </div>
      </nav>
    );
  }