import React from 'react';
import gear from '../assets/sponge.png';
import '../styles/home.css'; // Assicurati di includere il file CSS
import { Helmet } from 'react-helmet';

function About() {
  return (
    <div className="home-container">
      <Helmet>
        <title>About Us</title>
      </Helmet>

      {/* Header */}
      <header className="header">
        <h1>About Us</h1>
      </header>

      {/* Body */}
      <main className="body">
        <img src={gear} className="App-logo" alt="logo" />
        <p>This is the about page content. Learn more about us and what we do!</p>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Marxo03. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default About;
