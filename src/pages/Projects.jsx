import React from 'react';
import '../styles/home.css';
import '../styles/terminal-loading.css'; 
import { Helmet } from 'react-helmet';
import logo from '../assets/my-logo_transparent.png'; 
import Health4Paws from '../assets/Health4Paws.png';
import EcoPath from '../assets/ecopath.png';
import { NavLink } from 'react-router-dom';
import ProjectCard from '../compontents/ProjectsCard';
import '../styles/projects-cards.css';

function Projects() {
  return (
    <div className="home-container">
        <Helmet>
          <title>Projects</title>
        </Helmet>
      {/* Header */}
      <header className="header">
        <h1>Welcome to Projects Page</h1>
      </header>

      {/* Body */}
      <main className="body">
        <h2>My Projects:</h2>
        <p>This is the projects page content. Enjoy exploring!</p>
      
      <div className="projects-container">
      <ProjectCard 
        title="Arduino Projects"
        description="Embedded projects and IoT solutions."
        demoLink="https://example.com/demo"
        sourceLink="https://github.com/Marxo03/Arduino_projects"
        imageUrl="https://raw.githubusercontent.com/Marxo03/Arduino_projects/refs/heads/main/Projects/Arduino_Alarm_Clock/clock_circuit.jpg"
      />

      <ProjectCard 
        title="Health4Paws Project"
        description="Project focused on dog health."
        demoLink=""
        sourceLink="https://technomances.github.io/"
        imageUrl={Health4Paws}
      />
      <ProjectCard 
        title="Ecopath Project"
        description="Eco-sustainable solution for urban transportation."
        demoLink=""
        sourceLink=""
        imageUrl={EcoPath}
      />


      </div>
        {/*<div class="terminal-loader">
          <div class="terminal-header">
            <div class="terminal-title">Status</div>
            <div class="terminal-controls">
              <div class="control close"></div>
              <div class="control minimize"></div>
              <div class="control maximize"></div>
            </div>
          </div>
          
          <div class="text">Work In progress...</div>
        </div>*/}
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

export default Projects;
