import React from 'react';
import './mediaqueries.css';

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
          <a href="/Experience" className="navbar-link">
            Experience
          </a>
        </li>
        <li className="navbar-item">
          <a href="/Projects" className="navbar-link">
            Projects
          </a>
        </li>
        <li className="navbar-item">
          <a href="/contact" className="navbar-link">
            Contact me
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
