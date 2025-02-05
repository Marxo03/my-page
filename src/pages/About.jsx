import React from 'react';
import '../styles/home.css';
import '../styles/cards.css';
import { Helmet } from 'react-helmet';
import logo from '../assets/my-logo_transparent.png'; 
import { NavLink } from 'react-router-dom';
import ProfileCard from '../compontents/ProfileCard';

function About() {
  return (
    <div className="home-container">
      <Helmet>
        <title>About</title>
      </Helmet>

      {/* Header */}
      <header className="header">
        <h1>About Me</h1>
      </header>

      {/* Body */}
      <main className="body">
        <ProfileCard></ProfileCard>
      
      
      {/*<div class="container">
        <div data-text="Github"  class="glass">
          <svg viewBox="0 0 496 512" height="1em" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
            ></path>
          </svg>
        </div>
        <div data-text="Code"  class="glass">
          <svg viewBox="0 0 640 512" height="1em" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"
            ></path>
          </svg>
        </div>
        <div data-text="Profile" class="glass">
        <svg viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M256 0c70.7 0 128 57.3 128 128s-57.3 128-128 128-128-57.3-128-128 57.3-128 128-128zm0 320c-79.5 0-144 64.5-144 144v32h288v-32c0-79.5-64.5-144-144-144z"
          ></path>
        </svg>
        </div>

      </div>
      */}
        <p>This is the about page content. Learn more about me and what i do! <i class='bx bxs-invader'></i></p>
      
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
              <a href="https://instagram.com/_.red_owl._"><i class='bx bxl-instagram' ></i></a>
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
              <li>
                <NavLink to="/my-page/projects#arduino" activeClassName="active">
                  Arduino Projects
                </NavLink>
              </li>
              <li><a href="https://technomances.github.io/">Health4Paws</a></li>
              <li><NavLink to="/my-page/projects#ecopath" activeClassName="active">
                  EcoPath
                </NavLink>
              </li>
              <li><NavLink to="/my-page/projects#another" activeClassName="active">
                  Other Projects
                </NavLink>
              </li>
            </ul>
            <ul className="box">
              <li className="link_name">Contact Me</li>
              <li>
                <NavLink to="/my-page/contacts" activeClassName="active">
                  Contacts
                </NavLink>
              </li>
              <li>
                <a href="mailto:jack.owl03m@gmail.com">jack.owl03m@gmail.com</a>
              </li>
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
}

export default About;
