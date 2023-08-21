import { useState } from 'react'
import React from 'react';
import backgroundHome from '../src/assets/backgroundHome.jpg'

  const Navbar = () => {

    return (


      <nav className="navbar">
        <div className="navbar-brand">
          <a href="/" className="navbar-logo">
            S|SILEKU
          </a>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="/" className="navbar-link">
              Home
            </a>
          </li>
          <li className="navbar-item">
            <a href="/about" className="navbar-link">
              About me
            </a>
          </li>
          <li className="navbar-item">
            <a href="/about" className="navbar-link">
              Experience
            </a>
          </li>
          <li className="navbar-item">
            <a href="/about" className="navbar-link">
              Projects
            </a>
          </li>
          <li className="navbar-item">
            <a href="/contact" className="navbar-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>


    );
  }

  const App = () => {
    return (
      <div>
         <div>
      <div className="app">
        <Navbar />
        <div className="home-page" >
          <h1>Welcome to Our Website</h1>
          <img src="{backgroundHome}" alt="background" />
          <p>Your awesome website description goes here.</p>
        </div>
      </div>
      </div>
      </div>
    );
  };
  


export default Navbar; 
App;

