import React from 'react';
import gear from '../assets/gear.png';
import '../styles/home.css'; // Assicurati di includere il file CSS
import { Helmet } from 'react-helmet';

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
      <footer className="footer">
        <p>&copy; 2025 Marxo03. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Resume;
