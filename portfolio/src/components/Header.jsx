import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="navbar">
          <li className="nav-items" id="home">
            <Link to="/" className="btn-nav">Home</Link>
          </li>
          <li className="nav-items">
            <a href="#services" className="btn-nav">Services</a>
          </li>
          <li className="nav-items">
            <Link to="/" className="btn-nav">
              <h2 style={{ color: '#207561' }}><b>Me.</b></h2>
            </Link>
          </li>
          <li className="nav-items">
            <a href="#about" className="btn-nav">About</a>
          </li>
          <li className="nav-items">
            <a href="#contact" className="btn-nav">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;