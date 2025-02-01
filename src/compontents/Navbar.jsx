import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';
import logo from '../assets/my-logo_transparent.png'; // Importa l'immagine

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo" /> {/* Aggiungi l'immagine */}
      </div>      
      <ul>
        <li>
          <NavLink to="/my-page" end activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/my-page/about" activeClassName="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/my-page/resume" activeClassName="active">
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink to="/my-page/projects" activeClassName="active">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/my-page/contacts" activeClassName="active">
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
