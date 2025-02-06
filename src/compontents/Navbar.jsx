import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';
import logo from '../assets/my-logo_transparent.png';
import clickSound from '../assets/pop-sound.mp3';  // Importa il file audio

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Funzione per chiudere il menù al click di un link
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Funzione per scrollare all'inizio della pagina
  const scrollToTop = () => {
    window.scrollTo(0, 0); // Scrolla la pagina all'inizio
  };

  // Funzione per riprodurre il suono al click
  const playSound = () => {
    const audio = new Audio(clickSound); // Crea un oggetto audio
    audio.playbackRate = 1.5; // Aumenta la velocità (1.5 è più veloce, puoi provarne altri valori)
    audio.play(); // Riproduce il suono
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
          <NavLink
            to="/my-page"
            end
            activeClassName="active"
            onClick={() => { closeMenu(); scrollToTop(); playSound(); }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-page/about"
            activeClassName="active"
            onClick={() => { closeMenu(); scrollToTop(); playSound(); }}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-page/resume"
            activeClassName="active"
            onClick={() => { closeMenu(); scrollToTop(); playSound(); }}
          >
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-page/projects"
            activeClassName="active"
            onClick={() => { closeMenu(); scrollToTop(); playSound(); }}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-page/contacts"
            activeClassName="active"
            onClick={() => { closeMenu(); scrollToTop(); playSound(); }}
          >
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
