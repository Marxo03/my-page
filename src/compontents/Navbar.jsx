import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';
import logo from '../assets/my-logo_transparent.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Funzione per chiudere il menù al click di un link
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo" />
        <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        {isMenuOpen ? <i className='bx bx-x'></i> : <i className='bx bx-menu'></i>}
      </div>
      </div>
      
      <ul className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
        <li>
          <NavLink to="/my-page" end activeClassName="active" onClick={closeMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/my-page/about" activeClassName="active" onClick={closeMenu}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/my-page/resume" activeClassName="active" onClick={closeMenu}>
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink to="/my-page/projects" activeClassName="active" onClick={closeMenu}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/my-page/contacts" activeClassName="active" onClick={closeMenu}>
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
