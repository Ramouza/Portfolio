import React from 'react';
import './navbar.styles.scss';

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
      <nav className="navbar">
        <div><Link className='Logo' to="/">Ramouza</Link></div>
        <ul>
          <li><Link className='btn' to="/">Home</Link></li>
          <li><Link className='btn' to="/about">About</Link></li>
          <li><Link className='btn' to="/contact">Contact</Link></li>
        </ul>
      </nav>
  );
}

export default Navbar;
