import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css'; // Assicurati che il percorso del CSS sia corretto

const Navbar = () => {
  return (
    <nav>
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
      </ul>
    </nav>
  );
};

export default Navbar;
