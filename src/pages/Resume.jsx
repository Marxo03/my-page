import React from 'react';
import gear from '../assets/gear.png';
import '../styles/home.css'; // Assicurati di includere il file CSS
import { Helmet } from 'react-helmet';
import logo from '../assets/my-logo_transparent.png'; 
import { NavLink } from 'react-router-dom';

function Resume() {
  return (
    <div className="home-container">
      <Helmet>
        <title>Resume</title>
      </Helmet>

      {/* Header */}
      <header className="header">
        <h1>My Resume</h1>
      </header>

      {/* Body */}
      <main className="body">
        <img src={gear} className="App-logo" alt="logo" />
        <p>This is the resume page content. Explore my skills, experience, and education!</p>
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
              <li><a href="#">Arduino Projects</a></li>
              <li><a href="https://technomances.github.io/">Health4Paws</a></li>
              <li><a href="#">EcoPath</a></li>
              <li><a href="#">Other Projects</a></li>
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
              <a href="#">Privacy policy</a>
              <div className="credit">Made with <span style={{ color: 'tomato' }}><i class='bx bxs-heart' ></i></span> by <a href="https://www.marxo03.com/">Marxo03</a></div>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Resume;
