import React from 'react';
//import ponyo from '../assets/ponyo.png';
import '../styles/home.css';
import { Helmet } from 'react-helmet';
import logo from '../assets/my-logo_transparent.png';
//import profile from '../assets/dog.png';
import { NavLink } from 'react-router-dom';
import '../styles/home.css';

function Home() {

  // Funzione per scrollare all'inizio della pagina
  const scrollToTop = () => {
    window.scrollTo(0, 0); // Scrolla la pagina all'inizio
  };

  return (
    <div className="home-container">
      <Helmet>
        <title>Home Page</title>
      </Helmet>

      {/* Header */}
      <header id="home-header" className="header">
        
        <div className="header-title">
          <h1>Home Page</h1>
        </div>
        <div className="image-header-container">
          {/*<img src={profile} className="dog-image" alt="funny-dog-developer" />*/}
          <div className="text-content">
            <h1>EXPLORE SECTIONS!</h1>
          </div>
          
        </div>
        
      </header>

      <main className="main">
        <h2 className="main-title">Welcome to My Home Page</h2>
        
        <div className="content-container">
          <section id="first-section" className="section">
            <p>
              Hi and welcome to my portfolio! Here, you’ll be able to learn more about who I am, what I do, and the projects I’m most passionate about. I’ve always had a love for technology, and I strive to blend it with creativity and a curiosity to learn something new every day. Every project I work on is meant to solve a problem and leave a positive impact in some way.
            </p>
          </section>

          <section className="section">
            <h3 className="section-title">Unique Solutions for Every Challenge</h3>
            <p>
              Each project I create starts with a specific need, and I always aim to find the best possible solution. Here, you’ll discover more about me, the experiences that have shaped my journey, and how we can collaborate to create something truly exciting. If you have an idea in mind or simply want to learn more, you're in the right place.
            </p>
          </section>

          <section className="section">
            <h3 className="section-title">Projects for Those Who Want to Make a Difference</h3>
            <p>
              If you're an entrepreneur, an innovator, or someone who believes in the power of technology, this section is for you. From Arduino systems to more advanced solutions like EcoPath, you’ll explore the projects I’ve worked on and see how technology can truly make a difference in business and beyond. Every project is an opportunity for growth, and I’m always ready to do my best to help you achieve your goals.
            </p>
          </section>

          <section className="section">
            <h3 className="section-title">Sharing, Learning, and Growing Together</h3>
            <p>
              Whether you're a student, a young innovator, or just a curious person looking to learn more, I’m here to share what I know. This space is also an opportunity to inspire you, offer some ideas for your next project, or simply have a chat. If you have questions, ideas, or just want to talk tech, don’t hesitate to reach out. I’m always happy to connect with new people.
            </p>
          </section>
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
                <NavLink to="/my-page" end activeClassName="active" onClick={() => { scrollToTop(); }}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/my-page/about" activeClassName="active" onClick={() => {  scrollToTop(); }}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/my-page/resume" activeClassName="active" onClick={() => { scrollToTop(); }}>
                  Resume
                </NavLink>
              </li>
              <li>
                <NavLink to="/my-page/projects" activeClassName="active" onClick={() => { scrollToTop(); }}>
                  Projects
                </NavLink>
                </li>
            </ul>
            <ul className="box">
              <li className="link_name">My Projects</li>
              <li>
                <NavLink to="/my-page/projects#arduino" activeClassName="active" onClick={() => { scrollToTop(); }}>
                  Arduino Projects
                </NavLink>
              </li>
              <li><a href="https://technomances.github.io/">Health4Paws</a></li>
              <li><NavLink to="/my-page/projects#ecopath" activeClassName="active" onClick={() => { scrollToTop(); }}>
                  EcoPath
                </NavLink>
              </li>
              <li><NavLink to="/my-page/projects#another" activeClassName="active" onClick={() => { scrollToTop(); }}>
                  Other Projects
                </NavLink>
              </li>
            </ul>
            <ul className="box">
              <li className="link_name">Contact Me</li>
              <li>
                <NavLink to="/my-page/contacts" activeClassName="active" onClick={() => { scrollToTop(); }}>
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

export default Home;
