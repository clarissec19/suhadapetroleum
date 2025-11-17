import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import logo from '../../../assets/img/clearlogo2.png';
import './nav.css'; 

const Nav = () => {
  const [navClass, setNavClass] = useState('');
  const [toggledNav, setToggledNav] = useState(false);

  const toggleNav = () => {
    setToggledNav(!toggledNav);
  };

  useEffect(() => {
    const handleScroll = () => {
      setNavClass(window.scrollY >= 200 ? 'scrolled' : '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${navClass}`}>
      <div className="nav-container">
        <Link to="/" className="logo" onClick={() => setToggledNav(false)}>
          <img src={logo} alt="Company Logo" className="logoImage" />
        </Link>

        <button className="nav-toggle" onClick={toggleNav}>
          ☰
        </button>

        <ul className={`nav-links ${toggledNav ? 'nav-active' : ''}`}>
          <li><Link to="/" onClick={() => setToggledNav(false)}>Home</Link></li>
          <li><Link to="/About" onClick={() => setToggledNav(false)}>About</Link></li>
          <li><Link to="/Service" onClick={() => setToggledNav(false)}>Service</Link></li>
          <li><Link to="/Product" onClick={() => setToggledNav(false)}>Product</Link></li>
          <li><Link to="/Contact" onClick={() => setToggledNav(false)}>Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
