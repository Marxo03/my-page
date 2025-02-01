import React from 'react';
import profile from '../assets/profile.jpg';
import '../styles/home.css'; 
import '../styles/resume.css'; 
import '../styles/resume-cards.css'; 
import { Helmet } from 'react-helmet';
import logo from '../assets/my-logo_transparent.png'; 
import { NavLink } from 'react-router-dom';

function Resume() {
  return (
    <div className="resume-container">
      <Helmet>
        <title>Resume</title>
      </Helmet>

      {/* Header */}
      <header className="header">
        <h1>My Resume</h1>
      </header>

      {/* Main */}
      <main className="main-resume">
        <div className="card">
          <div className="profile-info-container">
            <div className="section profile-section">
              <img src={profile} alt="Profile" className="profile-image" />
              <h2 className="name">Marco Mongelli</h2>
              <p className="job-title">Software Developer</p>
            </div>

            <div className="section personal-info">
              <h3>Personal Information</h3>
              <ul>
                <li><strong>Email:</strong> <i className='bx bxs-envelope' ></i> jack.owl03m@gmail.com</li>
                <li><strong>Phone:</strong> <i className='bx bxs-phone'></i> +39 393 1580648 </li>
                <li><strong>Location:</strong> <i className='bx bxs-map'></i> Bari, Italy</li>
              </ul>
            </div>
          </div>

          <div className="section">
            <h3>Education</h3>
            <div className="education-item">
              <h4>Bachelor's in Computer Science</h4>
              <p><strong>University:</strong> University of Bari Aldo Moro</p>
              <p><strong>Year:</strong> 2022 - 202?</p>
            </div>
          </div>

          <div className="section">
            <h3>Experience</h3>
            <div className="experience-item">
              <h4>Software Engineer | Technomancers StartUp</h4>
              <p><strong>Duration:</strong> Oct 2024 - Feb 2025</p>
              <p>Developed an innovative web app for managing animal and veterinary patient health using React, CSS3, Node.js, and REST APIs.</p>
            </div>
          </div>

          <div className="section">
            <h3>Skills <i class='bx bx-code-alt'></i></h3>
            {/* Frontend */}
            <div className="section-title">
              <h4>Frontend <i class='bx bx-minus-front'></i></h4>
              <ul>
                {/* Linguaggi */}
                <li>
                  <span><i className='bx bxl-javascript'></i> JavaScript, </span>
                  <span><i className='bx bxl-html5'></i> HTML5, </span>
                  <span><i className='bx bxl-css3'></i> CSS3</span>
                </li>                
                {/* Frameworks */}
                <li>
                  <span><i className='bx bxl-react'></i> React.js, </span>
                  <span><i className='bx bxl-vuejs'></i> Vue.js, </span>
                  <span><i className='bx bxl-bootstrap'></i> Bootstrap 4</span>
                </li>
              </ul>
            </div>
            {/* Backend */}
            <div className="section-title">
              <h4>Backend <i class='bx bx-code-curly' ></i></h4>
              <ul>
                {/* Linguaggi */}
                <li>
                  <span><i className='bx bxl-javascript'></i> JavaScript, </span>
                  <span><i className='bx bxl-python'></i> Python, </span>
                  <span><i className='bx bxl-java'></i> Java, </span>
                  <span> C/C++, </span>
                  <span>.NET, </span>
                </li>             
                {/* Frameworks */}
                <li>
                  <span><i className='bx bxl-nodejs'></i> Node.js, </span>
                  <span><i className='bx bxl-django'></i> Django, </span>
                  <span><i className='bx bxl-spring-boot'></i> Spring Boot</span>
                </li>
              </ul>
            </div>
            {/* Networking */}
            <div className="section-title">
              <h4>Networking <i className='bx bx-server'></i></h4>
              <ul>
                {/* Linguaggi */}
                <li>
                  <span> C/C++, </span>
                  <span> TCP/IP, </span>
                  <span> HTTP, </span>
                  <span> WebSockets</span>
                </li>
              </ul>
            </div>
            {/* Embedded Systems */}
            <div className="section-title">
              <h4>Embedded Systems <i class='bx bx-microchip' ></i></h4>
              <ul>
                {/* Linguaggi */}
                <li>
                  <span>C, </span>
                  <span>C++, </span>
                  <span> Assembly X86</span>
                </li>           
                {/* Tecnologie */}
                <li>
                  <span><i class='bx bx-microchip' ></i>ARM, </span>
                  <span><i class='bx bx-microchip' ></i> Raspberry Pi</span>
                </li>
              </ul>
            </div>
            {/* Database */}
            <div className="section-title">
              <h4>Database <i className='bx bxs-data'></i></h4>
              <ul>
                <li>
                  <span><i className='bx bx-data'></i> SQL, </span>
                  <span><i class='bx bxs-data' ></i> MySQL, </span>
                  <span><i class='bx bxl-postgresql' ></i> PostgreSQL, </span>
                  <span><i class='bx bxl-mongodb' ></i> MongoDB</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="section">
            <h3>Languages</h3>
            <ul>
              <li><strong>Italian: </strong>Native</li>
              <li><strong>English: </strong>B1</li>
            </ul>
          </div>
        </div>
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

export default Resume;
