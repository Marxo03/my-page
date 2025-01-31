import React from 'react';
import gear from '../assets/ponyo.png';
import '../styles/home.css'; // Assicurati di includere il file CSS
import { Helmet } from 'react-helmet';

function Home() {
  return (
    <div className="home-container">
      <Helmet>
          <title>Home Page</title>
        </Helmet>
      {/* Header */}
      <header className="header">
        <h1>Welcome to My Home Page</h1>
      </header>

      {/* Body */}
      <main className="body">
        <img src={gear} className="App-logo" alt="logo" />
        <p>This is the home page content. Enjoy exploring!</p>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Marxo03. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
