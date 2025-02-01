// src/pages/NotFound.js
import React from 'react';
import '../styles/home.css';
import '../styles/patterns.css';
import { Helmet } from 'react-helmet';
import logo from '../assets/my-logo_transparent.png'; 
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="home-container" style={{background:""}}>
    <Helmet>
        <title>404 - Not Found</title>
      </Helmet>
    {/* Header */}
    <header className="header">
        <h1>Houston abbiamo un problema!</h1>
        
    </header>

    {/* Body */}
    <main className="pattern">
        <img 
            src="https://static-00.iconduck.com/assets.00/404-page-not-found-illustration-2048x998-yjzeuy4v.png" 
            alt="page Not found" 
            width="50%"/>
        <p>Sembra che la pagina che stai cercando non esista. <i class='bx bxs-error' ></i></p>
        <button style={{
            backgroundColor: '#4CAF50', // colore di sfondo
            color: 'white', // colore del testo
            border: 'none', // rimuovi il bordo
            padding: '10px 20px', // aggiungi padding
            textAlign: 'center', // centra il testo
            textDecoration: 'none', // rimuovi la sottolineatura del link
            display: 'inline-block', // imposta display inline-block
            fontSize: '3vmin', // imposta la dimensione del font
            borderRadius: '5px', // aggiungi angoli arrotondati
            cursor: 'pointer', // cambia il cursore quando passa sopra il bottone
            transition: '#000 0.3s', // aggiungi una transizione per l'effetto hover
        }}>

        <NavLink to="/my-page" style={{ color: 'white', textDecoration: 'none' }}>
        Torna alla Home
        </NavLink>

        </button>

    </main>

    {/* Footer */}
    <footer>
      <div className="content">
        <div className="top">
          <div className="logo-details">
          <div className="logo">
            <NavLink to="/my-page" end activeClassName="active">
              <img src={logo} alt="Logo" className="footer-logo" />
            </NavLink>
          </div> 
          </div>
          <div className="media-icons">
            <a href="https://github.com/Marxo03"><i class='bx bxl-github'></i></a>
            <a href="https://discord.com/users/j4ck_owl03"><i class='bx bxl-discord-alt'></i></a>
            <a href="https://twitter.com/myprofile"><i class='bx bxl-twitter' ></i></a>
            <a href="https://instagram.com/myprofile"><i class='bx bxl-instagram' ></i></a>
            <a href="mailto:jack.owl03m@gmail.com"><i class='bx bxl-gmail' ></i></a>
          </div>
        </div>

        <div className="link-boxes">
          <ul className="box">
            <li className="link_name">Sections</li>
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
          </ul>
          <ul className="box">
            <li className="link_name">My Projects</li>
            <li><a href="#arduino">Arduino Projects</a></li>
            <li><a href="https://technomances.github.io/">Health4Paws</a></li>
            <li><a href="#ecopath">EcoPath</a></li>
            <li><a href="#another">Other Projects</a></li>
          </ul>
          <ul className="box">
            <li className="link_name">Contact</li>
            <li><a href="mailto:jack.owl03m@gmail.com">jack.owl03m@gmail.com</a></li>
          </ul>
        </div>
      </div>

      <div className="bottom-details">
        <div className="bottom_text">
          <span className="copyright_text"><a href="https://opensource.org/license/mit"> &copy; Copyright 2025 Marxo03</a></span>
          <span className="policy_terms">
            <a href="#privacy-policy">Privacy policy</a>
            <div className="credit">Made with <span style={{ color: 'tomato' }}><i class='bx bxs-heart' ></i></span> by <a href="https://www.marxo03.com/">Marxo03</a></div>
          </span>
        </div>
      </div>
    </footer>
  </div>
  );
};

export default NotFound;
