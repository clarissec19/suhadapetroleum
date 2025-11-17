import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import logo from '../../../assets/img/logo.jpg';
import './nav.css'; 

const Nav = () => {
  const [toggledNav, setToggledNav] = useState(false);

  return (
    <>
      <nav className="navbar">

        <div className="logo">
          <img src={logo} alt="Company Logo" className="logoImage" />
        </div>

        {/* DESKTOP MENU */}
        <ul className="nav-links-desktop">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Service">Service</Link></li>
          <li><Link to="/Product">Product</Link></li>
          <li><Link to="/Contact">Contact Us</Link></li>
        </ul>

        {/* MOBILE HAMBURGER */}
        <button className="nav-toggle" onClick={() => setToggledNav(!toggledNav)}>
          ☰
        </button>

        {/* MOBILE MENU */}
        <ul className={`nav-links-mobile ${toggledNav ? 'active' : ''}`}>
          <li><Link onClick={() => setToggledNav(false)} to="/">Home</Link></li>
          <li><Link onClick={() => setToggledNav(false)} to="/About">About</Link></li>
          <li><Link onClick={() => setToggledNav(false)} to="/Service">Service</Link></li>
          <li><Link onClick={() => setToggledNav(false)} to="/Product">Product</Link></li>
          <li><Link onClick={() => setToggledNav(false)} to="/Contact">Contact Us</Link></li>
        </ul>

      </nav>

      <div className="nav-bottom-line"></div>
    </>
  );
};

export default Nav;
