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
                <li><strong>Email:</strong> <i className='bx bxs-envelope' ></i> jack.owl03m@example.com</li>
                <li><strong>Phone:</strong> <i className='bx bxs-phone'></i> +39 393 7890 </li>
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
              <h4>Software Engineer | Company ABC</h4>
              <p><strong>Duration:</strong> Jan 2020 - Present</p>
              <p>Developed web applications using React and Node.js. Improved the performance of key systems by 30%.</p>
            </div>
          </div>

          <div className="section">
            <h3>Skills</h3>
            <ul>
              <li>
                <span>JavaScript, React.js, Vue.js, Node.js</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '90%' }}></div>
                </div>
              </li>
              <li>
                <span>HTML5, CSS3, Bootstrap 4</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '75%' }}></div>
                </div>
              </li>
              <li>
                <span>Python, Django, PyQt, Pandas, Numpy</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '85%' }}></div>
                </div>
              </li>
              <li>
                <span>SQL, MySQL, PostgreSQL, MongoDB</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '80%' }}></div>
                </div>
              </li>
            </ul>
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
}

export default Resume;
